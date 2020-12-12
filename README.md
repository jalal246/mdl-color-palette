> :rainbow: Generate Color from material design [palette](https://material.io/guidelines/style/color.html#color-color-palette)

## Install

```sh
npm install mdl-color-palette
```

## Usage

```javascript
import colorGen, { RED } from 'mdl-color-palette';

const randomColor = colorGen();

console.log(randomColor);
//  random color from  material color palette
//  in hex code for example : '#f06292'

console.log(RED);
// returns array of red palette from 50 to 900
```

## API

### colorGen({options})

Generate random color.

`options`

* `color` string, one of the available colors.
* `isLight` Boolean, if true, will select light random color.
* `isDark` Boolean, if true, will select dark random color.

### color

Return array of required color

`Available Colors`

* RED
* PINK
* PURPLE
* DEPP_PURPLE
* INDIGO
* BLUE
* LIGHT_BLUE
* CYAN
* TEAL
* GREEN
* LIGHT_GREEN
* LIME
* YELLOW
* AMBER
* ORANGE
* DEEP_ORANGE
* BROWN
* GREY
* BLUE_GREY

## License

This project is licensed under the [MIT License](https://github.com/jalal246/mdl-color-palette/eblob/master/LICENSE)
