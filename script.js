function changeImage1()
{
    var displayImage = document.getElementById('Image1');
    if (displayImage.src.match('item_1.jpg'))
    {
        displayImage.src = 'item_1_2.jpg'
    }
    else
    {
        displayImage.src = 'item_1.jpg'
    }
}