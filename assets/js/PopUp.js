
const randomOrders = [{
NameOfPerson:'Jonathon',
OrderAmount:'9000 gallons',
Location:'New Jersey'
},
{
NameOfPerson: 'Zach',
OrderAmount: '100 gallons',
Location: 'Vermont'
},
{
NameOfPerson: 'Jim',
OrderAmount: '12000 gallons',
Location: 'Deleware'
},
{
NameOfPerson: 'Pat',
OrderAmount: '12230 gallons',
Location: 'Cali'
},
{
NameOfPerson: 'Jake',
OrderAmount: '2000 gallons',
Location: 'Pa'
},
{
NameOfPerson: 'Bre',
OrderAmount: '20030 gallons',
Location: 'New York'
},
{
NameOfPerson: 'Mo',
OrderAmount: '4500 gallons',
Location: 'North Dakota'
},
{
NameOfPerson: 'Mike',
OrderAmount: '14000 gallons',
Location: 'Florida'
}]



const PopUp = function () {
 


    var previousIndex = false;

    var pickedIndex;
    if (previousIndex === false) { // never picked anything before
        pickedIndex = Math.floor(Math.random() * randomOrders.length);
    }
    else {
        pickedIndex = Math.floor(Math.random() * (randomOrders.length - 4));
        if (pickedIndex >= previousIndex) pickedIndex += 1;
    }
    previousIndex = pickedIndex;
    

    $('.divTest').remove()
    const newDiv = document.createElement('div')
    newDiv.className = "divTest"
     

    const logo = document.createElement('img')
    logo.className = 'Logo2'
    logo.setAttribute('src', './assets/images/logo-grey.jpg')
    newDiv.appendChild(logo)


    const newp = document.createElement('p')
    newp.className = 'namePerson'
        newp.textContent = `Name:  ${randomOrders[pickedIndex].NameOfPerson}`
    newDiv.appendChild(newp)

    newp2 = document.createElement('p')
    newp2.className = 'order'
        newp2.textContent = `Amount Ordered: ${randomOrders[pickedIndex].OrderAmount}`
    newDiv.appendChild(newp2)

    newp3 = document.createElement('p')
    newp3.className = 'location'
    newp3.textContent = `Was Placed In: ${randomOrders[pickedIndex].Location}`
    newDiv.appendChild(newp3)

    
    document.querySelector('.test').appendChild(newDiv)

    $('.divTest').slideToggle("slow")

    $('.divTest').fadeIn(1000).delay(5000).fadeOut(1000) 
}

setInterval(PopUp, 15000)