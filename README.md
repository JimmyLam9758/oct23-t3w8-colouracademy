# ColourAcademy - CSS Variable Generator Website

- CSS variable export (high priority)
- Fix width of modal
- save themes to a list of themes (medium priority)
- preview components like UI Colours (nice-to-have)
- Dark/light mode toggle in global context
- Deploy
  - show the thing that Netlify needs to make React Router work

## Routes

- "/" : homepage
  - CSS generator available here
- "/cssvariables" - CSS generator page
  - CSS generator available here
- "/generator/saved" - view list of saved themes
  - reads localstorage

## Contexts

- Base Colour
  - Hex colour of new theme
- Localstorage manager for list of themes
  - Array of Theme Lists
- Localstorage manager for current CSS theme
  - One Theme List
- List of CSS themes
  - Array of Theme Lists
- Current CSS theme
  - One Theme List

## Data

### Colour Object

```js
{
    hex: "#000000#",
    stength: 100,
    rgba: [255, 255, 255, 255]


}
```

### Theme List

```js
{
    name: "violet eggplant"
    colours: [
        Colour Objects go here
    ]
}
```
