window.application = {
    blocks: {},
    screens: {},

    renderScreen: function(screenName) {
        if (window.application.screens[screenName]) {
            app.innerHTML = '';
            window.application.screens[screenName]();
        } else {
            console.warn(`Screen "${screenName}" does not exist`);
        }     
    },
    renderBlock: function(blockName, container) {
        if(window.application.blocks[blockName]){
            window.application.blocks[blockName](container);
        } else{
            console.warn(`Block "${blockName}" does not exist`);
        }
    },
  }
  const app = document.querySelector('.app');
