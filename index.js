const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
        document.querySelector('#container').innerHTML = xhr.responseText;
    }
}
xhr.open('GET', 'coco-ajax.html', true);
xhr.send();

//fetch('coco-fetch.html')
//    .then(response => response.text())
//    .then(html => document.querySelector('#container-fetch').innerHTML = html)

async function ah() {
    const response = await fetch('coco-fetch.html');
    const html = await response.text();
    document.querySelector('#container-fetch').innerHTML = html;
};
ah();

document.querySelector('#but-ajax').addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            document.querySelector('#field').innerHTML += '<br>' + JSON.parse(xhr.responseText).mark;
        }
    }
    xhr.open('GET', 'velo-datas.json', true);
    xhr.send();
})

document.querySelector('#but-fetch').addEventListener('click', () => {
    fetch('velo-datas.json')
        .then(response => response.json())
        .then(datas => document.querySelector('#field').innerHTML += '<br>' + datas.size)
})

document.querySelector('#subm').addEventListener('click', () => {
    fetch('marks', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mark: document.querySelector('#tx').value
        })
    })
        .then( response => console.log(response))
        .then( () => document.querySelector('form').reset());

})