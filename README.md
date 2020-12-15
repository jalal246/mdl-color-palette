# mdl-color-palette

> Generate Color from material design palette

## Install

```sh
npm install mdl-color-palette
```

## API

### colorDice({options})

Generate random color from the color pallet

`options`

- `isLight:? Boolean` to randomly select light color.
- `isDark:? Boolean` to randomly select dark random color.

### Example

```js
import { colorDice } from "mdl-color-palette";

const randomColor = colorDice();

console.log(randomColor);
//  random color from  material color palette
//  in hex code for example : '#f06292'
```

### Colors

It returns a color based on name+number. It works with autocomplete and it can
be handled in production correctly with tree shaking.

```js
import colors from "mdl-color-palette/colors.json";

colors["amber-300"]; // "#ffd54f"
```

Available Colors

```json
{
  "red-50": "#ffebee",
  "red-100": "#ffcdd2",
  "red-200": "#ef9a9a",
  "red-300": "#e57373",
  "red-400": "#ef5350",
  "red-500": "#f44336",
  "red-600": "#e53935",
  "red-700": "#d32f2f",
  "red-800": "#c62828",
  "red-900": "#b71c1c",
  "pink-50": "#fce4ec",
  "pink-100": "#f8bbd0",
  "pink-200": "#f48fb1",
  "pink-300": "#f06292",
  "pink-400": "#ec407a",
  "pink-500": "#e91e63",
  "pink-600": "#d81b60",
  "pink-700": "#c2185b",
  "pink-800": "#ad1457",
  "pink-900": "#880e4f",
  "purple-50": "#f3e5f5",
  "purple-100": "#e1bee7",
  "purple-200": "#ce93d8",
  "purple-300": "#ba68c8",
  "purple-400": "#ab47bc",
  "purple-500": "#9c27b0",
  "purple-600": "#8e24aa",
  "purple-700": "#7b1fa2",
  "purple-800": "#6a1b9a",
  "purple-900": "#4a148c",
  "depp-purple-50": "#ede7f6",
  "depp-purple-100": "#d1c4e9",
  "depp-purple-200": "#b39ddb",
  "depp-purple-300": "#9575cd",
  "depp-purple-400": "#7e57c2",
  "depp-purple-500": "#673ab7",
  "depp-purple-600": "#5e35b1",
  "depp-purple-700": "#512da8",
  "depp-purple-800": "#4527a0",
  "depp-purple-900": "#311b92",
  "indigo-50": "#e8eaf6",
  "indigo-100": "#c5cae9",
  "indigo-200": "#9fa8da",
  "indigo-300": "#7986cb",
  "indigo-400": "#5c6bc0",
  "indigo-500": "#3f51b5",
  "indigo-600": "#3949ab",
  "indigo-700": "#303f9f",
  "indigo-800": "#283593",
  "indigo-900": "#1a237e",
  "blue-50": "#e3f2fd",
  "blue-100": "#bbdefb",
  "blue-200": "#90caf9",
  "blue-300": "#64b5f6",
  "blue-400": "#42a5f5",
  "blue-500": "#2196f3",
  "blue-600": "#1e88e5",
  "blue-700": "#1976d2",
  "blue-800": "#1565c0",
  "blue-900": "#0d47a1",
  "light-blue-50": "#e1f5fe",
  "light-blue-100": "#b3e5fc",
  "light-blue-200": "#81d4fa",
  "light-blue-300": "#4fc3f7",
  "light-blue-400": "#29b6f6",
  "light-blue-500": "#03a9f4",
  "light-blue-600": "#039be5",
  "light-blue-700": "#0288d1",
  "light-blue-800": "#0277bd",
  "light-blue-900": "#01579b",
  "cyan-50": "#e0f7fa",
  "cyan-100": "#b2ebf2",
  "cyan-200": "#80deea",
  "cyan-300": "#4dd0e1",
  "cyan-400": "#26c6da",
  "cyan-500": "#00bcd4",
  "cyan-600": "#00acc1",
  "cyan-700": "#0097a7",
  "cyan-800": "#00838f",
  "teal-50": "#e0f2f1",
  "teal-100": "#b2dfdb",
  "teal-200": "#80cbc4",
  "teal-300": "#4db6ac",
  "teal-400": "#26a69a",
  "teal-500": "#009688",
  "teal-600": "#00897b",
  "teal-700": "#00796b",
  "teal-800": "#00695c",
  "teal-900": "#004d40",
  "green-50": "#e8f5e9",
  "green-100": "#c8e6c9",
  "green-200": "#a5d6a7",
  "green-300": "#81c784",
  "green-400": "#66bb6a",
  "green-500": "#4caf50",
  "green-600": "#43a047",
  "green-700": "#388e3c",
  "green-800": "#2e7d32",
  "green-900": "#1b5e20",
  "light-green-50": "#f1f8e9",
  "light-green-100": "#dcedc8",
  "light-green-200": "#c5e1a5",
  "light-green-300": "#aed581",
  "light-green-400": "#9ccc65",
  "light-green-500": "#8bc34a",
  "light-green-600": "#7cb342",
  "light-green-700": "#689f38",
  "light-green-800": "#558b2f",
  "light-green-900": "#33691e",
  "lime-50": "#f9fbe7",
  "lime-100": "#f0f4c3",
  "lime-200": "#e6ee9c",
  "lime-300": "#dce775",
  "lime-400": "#d4e157",
  "lime-500": "#cddc39",
  "lime-600": "#c0ca33",
  "lime-700": "#afb42b",
  "lime-800": "#9e9d24",
  "lime-900": "#827717",
  "yellow-50": "#FFFDE7",
  "yellow-100": "#FFF9C4",
  "yellow-200": "#FFF59D",
  "yellow-300": "#FFF176",
  "yellow-400": "#FFEE58",
  "yellow-500": "#FFEB3B",
  "yellow-600": "#FDD835",
  "yellow-700": "#FBC02D",
  "yellow-800": "#F9A825",
  "yellow-900": "#F57F17",
  "amber-50": "#fff8e1",
  "amber-100": "#ffecb3",
  "amber-200": "#ffe082",
  "amber-300": "#ffd54f",
  "amber-400": "#ffca28",
  "amber-500": "#ffc107",
  "amber-600": "#ffb300",
  "amber-700": "#ffa000",
  "amber-800": "#ff8f00",
  "amber-900": "#ff6f00",
  "orange-50": "#fff3e0",
  "orange-100": "#ffe0b2",
  "orange-200": "#ffcc80",
  "orange-300": "#ffb74d",
  "orange-400": "#ffa726",
  "orange-500": "#ff9800",
  "orange-600": "#fb8c00",
  "orange-700": "#f57c00",
  "orange-800": "#ef6c00",
  "orange-900": "#e65100",
  "deep-orange-50": "#fbe9e7",
  "deep-orange-100": "#ffccbc",
  "deep-orange-200": "#ffab91",
  "deep-orange-300": "#ff8a65",
  "deep-orange-400": "#ff7043",
  "deep-orange-500": "#ff5722",
  "deep-orange-600": "#f4511e",
  "deep-orange-700": "#e64a19",
  "deep-orange-800": "#d84315",
  "deep-orange-900": "#bf360c",
  "brown-50": "#efebe9",
  "brown-100": "#d7ccc8",
  "brown-200": "#bcaaa4",
  "brown-300": "#a1887f",
  "brown-400": "#8d6e63",
  "brown-500": "#795548",
  "brown-600": "#6d4c41",
  "brown-700": "#5d4037",
  "brown-800": "#4e342e",
  "brown-900": "#3e2723",
  "grey-50": "#fafafa",
  "grey-100": "#f5f5f5",
  "grey-200": "#eeeeee",
  "grey-300": "#e0e0e0",
  "grey-400": "#bdbdbd",
  "grey-500": "#9e9e9e",
  "grey-600": "#757575",
  "grey-700": "#616161",
  "grey-800": "#424242",
  "grey-900": "#212121",
  "blue-grey-50": "#eceff1",
  "blue-grey-100": "#cfd8dc",
  "blue-grey-200": "#b0bec5",
  "blue-grey-300": "#90a4ae",
  "blue-grey-400": "#78909c",
  "blue-grey-500": "#607d8b",
  "blue-grey-600": "#546e7a",
  "blue-grey-700": "#455a64",
  "blue-grey-800": "#37474f",
  "blue-grey-900": "#263238"
}
```

## License

This project is licensed under the [MIT License](https://github.com/jalal246/mdl-color-palette/eblob/master/LICENSE)
