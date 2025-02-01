let box=document.querySelector('.hello');
const hi=() => {
    box.innerHTML=`<button onclick="remove();">hello</button>
    <button>hi</button>`;
}
document.querySelector('.bb').addEventListener('click',() => {
    hi();
});
function remove() {
    box.innerHTML='';
}