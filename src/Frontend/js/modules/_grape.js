import grape from 'grapesjs'

class Editor {
    constructor(){
        const editor = grapesjs.init({
            // Indicate where to init the editor. You can also pass an HTMLElement
            container: '.main',
            // Get the content for the canvas directly from the element
            // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
            fromElement: true,
            // Size of the editor
            height: '300px',
            width: 'auto',
            // Disable the storage manager for the moment
            storageManager: { type: null },
            // Avoid any default panel
            panels: { defaults: [] },
        });
    }
}

export default Editor;

