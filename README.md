# React - MUI

## Components

> _**Note:** Material UI Icons are not distributed as UMDs, hence, can't be used._

![components](components.png)

## Changes

### Imports
```js
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
```

->

```js
const {
  Stack,
  Button,
} = MaterialUI;
```

### Exports

```js
export default function BasicButtons() {
...
```

->

```js
function BasicButtons() {
...
```
