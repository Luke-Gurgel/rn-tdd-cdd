# POC - TDD & CDD RN

POC for test and component driven development in React Native

## E2E testing guidelines

### Framework

Cavy. Its full documentation can be found [here](https://cavy.app/docs/getting-started/installing).

It is easy to learn and simple to use. The tradeoff of using a JS only framework is that we don't have access to native code.

### Hooking up components

According to the docs, components can be hooked up with either the `useCavy` hook or the `hook` HOC. Whenever possible, prefer the `useCavy` hook.

```javascript
import { View } from 'react-native'
import { useCavy } from 'cavy'

// props are intact and we can use function components ✅

interface Props {}

const SomeComponent = (props: Props) => {
  const registerTestId = useCavy()
  return <View ref={registerTestId('some_component')} />
}

export default SomeComponent
```

```javascript
import { hook, TestHookGenerator } from 'cavy';

// props are affected and we have to use class components ❌

interface Props extends  {
  ...
  generateTestHook: TestHookGenerator
}

class SomeComponent extends React.Component<Props> {}

export default hook(SomeComponent)
```

### Constructing test ids

Test ids should be created by following the pattern `"<path>/<component>"`.

- `<path>` refers to the path to the component to be tested in the file tree, starting from the "feature" that the component relates to.

- `<component>` is the actual component to be tested.

This should make it easier to find components based on their test id in case a test fails.

They also expose the route a user would have to follow to get to a certain part of the app.

_Example 1_: email input

```
- login
  - form
    - email-input
      - index.tsx
```

```javascript
const EmailInput = (props: Props) => {
  const registerTestId = useCavy()
  return <TouchableOpacity ref={registerTestId('login/form/email-input')} />
}
```

_Example 2_: list item

```
- products
  - list
    - item
      - index.tsx
```

```javascript
const ProductItem = ({ product }: Props) => {
  const registerTestId = useCavy()
  return <View ref={registerTestId(`products/list/item/${product.id}`)} />
}
```

_Example 3_: child component that doesn't have its own file

```
- products
  - list
    - index.tsx
```

```javascript
const ProductList = ({ loading }: Props) => {
  const registerTestId = useCavy()

  if (loading) {
    return <ActivityIndicator ref={registerTestId('products/list/loading')} />
  }

  return <ListView ref={registerTestId('products/list')} />
}
```

Every page/screen directory should have a `test-ids.ts` file that exposes the paths to the components that should be tested.

```
- signup
  - form
    - test-ids.ts
```

```javascript
// test-ids.ts

export const emailInput = 'signup/form/email-input'
```

This allows the `.spec` files that sit outside of `src` to more easily get the ids.

### Tips and tricks

There are instances when there's no method built into the lib that does what the test needs, e.g. there's no helper method for triggering the `.blur()` method of an input or checking the `disabled` prop of a button.

We can use the `findComponent(id)` helper to get access to those props and methods like so:

```javascript
spec.it('validates input content on blur', async () => {
  await spec.fillIn(emailInput, 'invalid_email')
  const input = (await spec.findComponent('signup/form/email-input')) as Component<TextInputProps>
  input.props.onBlur?.(mockNativeSyntheticEvent)
  await spec.containsText(errorLabel, 'Please enter a valid email')
})
```

If we're looking for a certain prop in a custom or 3rd party component, we can also cast it with any interface.

```javascript
spec.it('displays a toast after a purchase', async () => {
  const toast = (await spec.findComponent('toastId')) as Component<{ visible: boolean }>
  await spec.press('buyButtonId')
  await spec.pause(2000)
  if (!toast.props.visible) {
    throw Error('expected: true / received: false')
  }
})
```
