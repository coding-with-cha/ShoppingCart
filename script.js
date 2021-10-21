function ajout(e){
    var x = (e.parentNode).parentNode
    // console.log(x.className)
    var liste = x.getElementsByTagName("DIV")
    var count = liste[2]
    var cmp = parseInt(count.textContent)
    var liste_p = x.getElementsByTagName("P")
    var article_price = liste_p[0]
    var  art_p = parseInt(article_price.textContent)
    // console.log(art_p)
    var total_price = document.getElementById("total")
    var tp = parseInt(total_price.textContent)
    cmp += 1
        switch(x.className){
            case "Apple": {
                art_p += 15000
                tp += 15000
                break;
            }
            case "Banane": {
                art_p += 5000
                tp += 5000
                break;
            }
            case "Orange": {
                art_p += 3000
                tp += 3000
                break;
            }
        }
        count.innerText = cmp
        article_price.innerText = art_p+"DT"
        total_price.innerText = tp+"DT"
}

function soustraction(e){
    var x = (e.parentNode).parentNode
    // console.log(x.className)
    var liste = x.getElementsByTagName("DIV")
    var count = liste[2]
    var cmp = parseInt(count.textContent)
    var liste_p = x.getElementsByTagName("P")
    var article_price = liste_p[0]
    var  art_p = parseInt(article_price.textContent)
    // console.log(art_p)
    var total_price = document.getElementById("total")
    var tp = parseInt(total_price.textContent)
    if(cmp ==1){
        cmp-=1
        art_p = 0
        switch(x.className){
            case "Apple": {
                art_p -= 15000
                tp -= 15000
                break;
            }
            case "Banane": {
                art_p -= 5000
                tp -= 5000
                break;
            }
            case "Orange": {
                art_p -= 3000
                tp -= 3000
                break;
            }
        }
    }
    if(cmp != 0){
        switch(x.className){
            case "Apple": {
                art_p -= 15000
                tp -= 15000
                break;
            }
            case "Banane": {
                art_p -= 5000
                tp -= 5000
                break;
            }
            case "Orange": {
                art_p -= 3000
                tp -= 3000
                break;
            }
        }
        cmp -= 1
    }
    else{
        art_p = 0
    }
    count.innerText = cmp
    article_price.innerText = art_p+"DT"
    total_price.innerText = tp+"DT"
}
var c = 0
function supprime(e){
    var x = ((e.parentNode).parentNode).parentNode
    var z = (e.parentNode).parentNode
    var liste = z.getElementsByTagName("P")
    var p = parseInt(liste[0].textContent)
    var total_price = document.getElementById("total")
    var tp = parseInt(total_price.textContent)
    tp -= p
    total_price.innerText = tp+"DT"
    x.style.display="none"
    c++
    if(c === 3){
        document.getElementById("more").style.display = "block"
    }
}

function like(e){
    var x = e.parentNode
    var liste = x.getElementsByTagName("IMG")
    var like = liste[2]
    var dislike = liste[1]
    dislike.style.display ="none"
    like.style.display = "block"
}

function dislike(e){
    var x = e.parentNode
    var liste = x.getElementsByTagName("IMG")
    var like = liste[2]
    var dislike = liste[1]
    dislike.style.display ="block"
    like.style.display = "none"
}

function sub(e){
    var x = e.parentNode
    var p = x.getElementsByTagName("P")
    var imgs = x.getElementsByTagName("IMG")
    if(parseInt(p[0].textContent)!= 0){
        e.style.display = "none"
        imgs[1].style.display = "block"
    }
}
 