
const clickFun = () => {
   const elementParagraph = document.getElementById(`p1`);
   const elementInput = document.getElementById('textInput');
   const elementContent = document.getElementById('content');

   elementParagraph.style.color = 'blue';
   elementParagraph.style.fontSize = '55px';
   elementParagraph.style.marginLeft = '50px';

   elementContent.style.border  = '1px solid red';

   const newTextContent = elementParagraph.textContent;

   elementInput.value = 'test';  // cand lucram cu value o putem schimba chiar daca elementInput e const, il cosideram un parametru
   elementParagraph.textContent = 'test new content'; // cand lucram cu content pe pagina nu e la fel, trebue sa schimbam elementul la baza

   const valueRead = elementInput.value;
   alert(valueRead);
   console.log('elementParagraph:', elementParagraph, 'elementInput:', elementInput, 'newTextContent:', newTextContent);
}