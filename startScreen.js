function renderStartScreen(){
    app.appendChild(templateEngine(startScreenTemplate));
}
window.application.screens['startScreen'] = renderStartScreen;


const startScreenTemplate = {
    tag: 'div',
    cls: 'start-screen',
    content:
    [
        {
            tag: 'div',
            cls: 'start-screen__title',
            content: 'Выберите сложность',
        },
        {
            tag: 'form',
            cls: 'start-screen__form',
            content: 
            [
                {
                    tag: 'div',
                    cls: 'start-screen__diff-holder',
                    content:
                    [
                        {  
                            tag: 'button',
                            cls: 'start-screen__diff-changer',
                            content: '1',                       
                        },
                        {
                            tag: 'button',
                            cls: 'start-screen__diff-changer',
                            content: '2',
                        },
                        {
                            tag: 'button',
                            cls: 'start-screen__diff-changer',
                            content: '3',
                        },
                    ]
                },
                {
                    tag: 'button',
                    cls: 'start-screen__button',
                    content: 'Старт'
                }
            ]
        }
    ]
}



window.application.renderScreen('startScreen');