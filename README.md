# cofuente.io

This is the open source code of my website.

### Installing

This repo runs on node.js. To run it locally, copy/paste the following commands into your OSX terminal:

```
git clone https://github.com/cofuente/cofue.git
cd cofue
npm i
npm run start
```

## Built With

- [React](https://reactjs.org/) - Web framework used
- [Google Fonts](https://fonts.google.com/) - Open Source Fonts

## Authors

- **Chiara Marcial Martínez** - [cofuente](https://github.com/cofuente)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

---

to do:
1-implement mobile gyro transforms with movement
4-populate device-too-small div w/ appropriate display
5-line up card text w/ css
6-before publishing: make sure responsive font sizes respond to card div and not html root element
7-change a links to buttoons as needed for hrefs to work in CardContent.js
8-in MyRBC.js use aspectRatios to figure out the cardwidth and height, maybe not necessary for npm package
9-also in MyRBC: figure out which font sizes to pass into the text wrapper styles and pass those in as props. in the package we're making, this won't be necessary because we can let the user style the card text with the css classes and such