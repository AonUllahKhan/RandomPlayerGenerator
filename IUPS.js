image_array = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '21.jpg',
    '22.jpg'
  ]

  caption_array = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v'
  ]

  image_caption_array [
    ["1.jpg", "a"],
    ["2.jpg", "b"],
    ["3.jpg", "c"],
    ["4.jpg", "d"],
    ["5.jpg", "e"],
    ["6.jpg", "f"]

  ]
  
  function get_random_image(){
    random_index = Math.floor(Math.random() * image_array.length);
    selected_image = image_array[random_index]
    document.getElementById('image_shower').src = `./team/${selected_image}`
    selected_image = image_caption_array [random_index][0]
    selected_caption = image_caption_array [random_index][1] 
    document.getElementById("caption_shower").textContent =  selected_caption
  }