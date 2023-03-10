import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{

  constructor(){}
  
  addParagraph () {
    const editor = document.getElementById("editor");
    const idNumber = (document.getElementsByTagName("p").length + 1);   
    
    let sel = document.getSelection()?.focusNode;
    let p_element = document.createElement("p");
    p_element.setAttribute("id", `paragraph${idNumber}`);
    p_element.setAttribute("contenteditable", "true");
    let br = document.createElement("br");
    p_element.appendChild(br);
       

    if(sel != undefined){
      editor?.replaceChild(p_element, sel);
      window.getSelection()?.selectAllChildren(p_element);
      window.getSelection()?.collapseToStart();
    }
    /*
    if(editor != undefined){
      editor.innerHTML += `<p contenteditable="true" id="paragraph${idNumber}"><br/></p>`;
      const parrafo = document.getElementById(`paragraph${idNumber}`);
      if(parrafo != null){
        window.getSelection()?.selectAllChildren(parrafo);
        window.getSelection()?.collapseToStart();
      }
      
    }*/
    
  }

  readSelected () {
    
    
       
  }
 
  addHeading2 () {    
    const editor = document.getElementById("editor");
    const idNumber = (document.getElementsByTagName("h2").length + 1);

    let sel = window.getSelection()?.focusNode;
    //let parent = sel?.parentNode;
    let h2 = document.createElement("h2");
    h2.setAttribute("id", `h2_${idNumber}`);
    h2.setAttribute("contenteditable", "true");
    let br = document.createElement("br");    
    h2.appendChild(br);

    if(sel != undefined ){
      editor?.replaceChild(h2, sel);
      window.getSelection()?.selectAllChildren(h2);
      window.getSelection()?.collapseToStart();
    } 
    

   /* if(editor != undefined){    
      editor.innerHTML += `<h2 contenteditable="true" id="h2_${idNumber}"><br/></h2>`;      
      const heading2 = document.getElementById(`h2_${idNumber}`);
      if(heading2 != null){
        window.getSelection()?.selectAllChildren(heading2);
        window.getSelection()?.collapseToStart();
      } 

    }*/

  }

  onVoidEditor () {    
    const editorContent = document.getElementById("editor");

    const idNumber = (document.getElementsByTagName("p").length + 1);   
    const selection = document.getSelection();   
    //let startSelection = selection?.anchorOffset;
    //let endSelection = selection?.focusOffset;
    
    let strong = document.createElement("strong");
    let text = document.createTextNode(""+selection?.toString());    
    strong.setAttribute("contenteditable", "true");
    strong.appendChild(text);
    let node = selection?.focusNode;
    console.log(node);
    
    if(node != undefined){
      editorContent?.replaceChild(strong, node);
    }

    if(editorContent != undefined){
      if (editorContent.innerHTML == '<br>') {
        editorContent.innerHTML = `<p contenteditable="true" id="paragraph1"><br/></p>`; 
        
        const inicio = document.getElementById("paragraph1");   
        if(inicio != undefined){
          window.getSelection()?.selectAllChildren(inicio);
          window.getSelection()?.collapseToStart();
        }   
      } 

    }    


 
    setTimeout(() => {      
      this.onVoidEditor();
      this.readSelected();
    }, 500);
  }
  
  ngOnInit(): void {
    //this.addParagraph();
    this.onVoidEditor();
    const inicio = document.getElementById("paragraph1");   
    if(inicio != undefined){
      inicio.focus();
      window.getSelection()?.selectAllChildren(inicio);
      window.getSelection()?.collapseToStart();         
    }   
  }  

}
