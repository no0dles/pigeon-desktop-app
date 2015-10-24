
'use strict';
const app = require('app');
const BrowserWindow = require('browser-window');
const globalShortcut = require('global-shortcut');


// report crashes to the Electron project
require('crash-reporter').start();

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

function createMainWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600
	});

	win.loadUrl(`file://${__dirname}/index.html`);
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate-with-no-open-windows', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});
var visible = true;

console.log(app.getPath('userData'));

app.on('ready', () => {
	mainWindow = createMainWindow();

	var ret = globalShortcut.register('ctrl+o', function() {
		console.log('ctrl+o is pressed');
		visible = !visible;

		if(visible) {
			mainWindow.show();
			mainWindow.setSkipTaskbar(true);
		}
		else {
			mainWindow.hide();
			mainWindow.setSkipTaskbar(false);
		}
	});

	app.dock.setBadge('1');

	mainWindow.on('blur', function () {
		//mainWindow.flashFrame(true);
		//app.dock.bounce('critical');
	});

	if (!ret) {
		console.log('registration failed');
	}
});
