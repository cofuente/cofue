# cofuente.io

This is the open source code of my personal page.

### Installing

This repo runs on node.js. To run it locally, copy/paste the following commands into your OSX terminal:

```
git clone https://github.com/cofuente/cofue.git
cd cofue
npm i
npm run start
```

## DEPLOYING
Contrary to all your training, on this repo we _do_ commit our code changes on `main`.
Once you're ready to publish your changes, you may do so with `npm run predeploy` on the command line. This changes the static files to be hosted living on the `gh-pages` branch. 
Next, use `npm run deploy` to publish. Do not delete the `gh-pages` branch. It is also unnecessary to checkout into that branch. All of the above scripts are to be run while you are on the `main` branch. 

## Built With

- [React](https://reactjs.org/) - Web framework used
- [Google Fonts](https://fonts.google.com/) - Open Source Fonts
- [GitHub Pages](https://pages.github.com/) - Free static hosting


## Authors
- **Chiara Marcial Martínez** - [cofuente](https://github.com/cofuente)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
