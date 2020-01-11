console.log('load header');

$('#header').load('/template/header.html', () => {
  console.log('header laoded');
});
