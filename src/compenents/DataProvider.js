import React, {createContext,useState} from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
 const [products, setProducts] = useState([
   {
     _id: '1',
     title: 'Boubou Wolof',
     images: [
       'https://dl.airtable.com/.attachments/98ba58129044d21db1c727601208a5fa/56e20219/product-1.jpg?ts=1654187075&userId=usrlJigop3OTV3JEj&cs=2a681566928d2c8a',
       'https://dl.airtable.com/.attachmentThumbnails/3d276189f4a40d269e61550745586419/dd3cf01e',
       'https://dl.airtable.com/.attachmentThumbnails/bafb3d4d6ddf92688385a9148ba55ac2/b20e0072',
       'https://dl.airtable.com/.attachmentThumbnails/480a86a401bac8f7d4f68d985286bbd9/18268dcb',
     ],
     description:
       'Cette vetement est très agréable à porter.   Son tissu est doux, léger et soigneux.   Cette djellaba dispose de manches larges et amples. Cela vous permet d’être totalement libre de vos mouvements.    Enfin, cette vetement a le col brodé, ce qui rajoute du charme à ce vêtement.   Djellaba Moderne avec Manches Larges Col Rond ouvert brodé : rapide et facile à enfiler Idéal en toutes circonstances : en extérieur et en intérieur',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',

     price: 15000,
     count: 1,
   },
   {
     _id: '2',
     title: 'Boubou Wolof',
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/c62248404535eac1e026708e0f9fb0a2/b03117de',
       'https://dl.airtable.com/.attachmentThumbnails/1517de99396ac5e1a772275976ce9fb6/15675d2b',
       'https://dl.airtable.com/.attachmentThumbnails/9c603644afb15254889ae550140c2ad5/2a49f58c',
     ],
     description:
       'Cette vetement est très agréable à porter.   Son tissu est doux, léger et soigneux.   Cette djellaba dispose de manches larges et amples. Cela vous permet d’être totalement libre de vos mouvements.    Enfin, cette vetement a le col brodé, ce qui rajoute du charme à ce vêtement.   Djellaba Moderne avec Manches Larges Col Rond ouvert brodé : rapide et facile à enfiler Idéal en toutes circonstances : en extérieur et en intérieur',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',

     price: 15000,
     count: 1,
   },
   {
     _id: '3',
     title: 'Boubou Wolof',
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/0fe9bb439520c312d9822b3c7d24a816/f5fa51a8',
       'https://dl.airtable.com/.attachmentThumbnails/45f7da0c38c9b5baabdae1a4394b353e/6e272f28',
       'https://dl.airtable.com/.attachmentThumbnails/48d1f4ce050ff0e6e0781bb5fc66354a/4115f67a',
       'https://dl.airtable.com/.attachmentThumbnails/adcbd4bdda818ad95064c489e6349380/cc562ac8',
     ],
     description:
       'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',

     price: 15000,
     count: 1,
   },
   {
     _id: '4',
     title: 'Costume Africain',
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/50359540ef5e988592fa9788ab91fb18/a7ac6163',
     ],
     description:
       'Cette vetement est très agréable à porter.   Son tissu est doux, léger et soigneux.   Cette djellaba dispose de manches larges et amples. Cela vous permet d’être totalement libre de vos mouvements.    Enfin, cette vetement a le col brodé, ce qui rajoute du charme à ce vêtement.   Djellaba Moderne avec Manches Larges Col Rond ouvert brodé : rapide et facile à enfiler Idéal en toutes circonstances : en extérieur et en intérieur',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',

     price: 20000,
     count: 1,
   },
   {
     _id: '5',
     title: 'Robe Wax Art',
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/1f9f39545c893a3679bc82f6e1345db5/b2a7495b',
     ],
     description:
       'Cette vetement est très agréable à porter.   Son tissu est doux, léger et soigneux.   Cette djellaba dispose de manches larges et amples. Cela vous permet d’être totalement libre de vos mouvements.    Enfin, cette vetement a le col brodé, ce qui rajoute du charme à ce vêtement.   Djellaba Moderne avec Manches Larges Col Rond ouvert brodé : rapide et facile à enfiler Idéal en toutes circonstances : en extérieur et en intérieur',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     price: 15000,
     count: 1,
   },
   {
     _id: '6',
     title: 'costume Africain',
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/d60ec0151918d7907f9cd44c023b9bbf/d6c8de98',
       'https://www.upsieutoc.com/images/2020/07/18/img2.jpg',
       'https://www.upsieutoc.com/images/2020/07/18/img3.jpg',
       'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
     ],
     description:
       'Cette vetement est très agréable à porter.   Son tissu est doux, léger et soigneux.   Cette djellaba dispose de manches larges et amples. Cela vous permet d’être totalement libre de vos mouvements.    Enfin, cette vetement a le col brodé, ce qui rajoute du charme à ce vêtement.   Djellaba Moderne avec Manches Larges Col Rond ouvert brodé : rapide et facile à enfiler Idéal en toutes circonstances : en extérieur et en intérieur',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     price: 30000,
     count: 1,
   },
   {
     _id: '7',
     title: 'Robe Wax',
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/ac7230fd9b130e96c6031ab77743af49/cc6a9297',
       'https://www.upsieutoc.com/images/2020/07/18/img2.jpg',
       'https://www.upsieutoc.com/images/2020/07/18/img3.jpg',
       'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
     ],
     description:
       'Cette vetement est très agréable à porter.   Son tissu est doux, léger et soigneux.   Cette djellaba dispose de manches larges et amples. Cela vous permet d’être totalement libre de vos mouvements.    Enfin, cette vetement a le col brodé, ce qui rajoute du charme à ce vêtement.   Djellaba Moderne avec Manches Larges Col Rond ouvert brodé : rapide et facile à enfiler Idéal en toutes circonstances : en extérieur et en intérieur',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     price: 15000,
     count: 1,
   },
   {
     _id: '8',
     title: 'Fila File Angline',
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/525efccdf849f5b0a80c10648b9ffdc0/020ddbcb',
       'https://www.upsieutoc.com/images/2020/07/18/img2.jpg',
       'https://www.upsieutoc.com/images/2020/07/18/img3.jpg',
       'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
     ],
     description:
       'Cette vetement est très agréable à porter.   Son tissu est doux, léger et soigneux.   Cette djellaba dispose de manches larges et amples. Cela vous permet d’être totalement libre de vos mouvements.    Enfin, cette vetement a le col brodé, ce qui rajoute du charme à ce vêtement.   Djellaba Moderne avec Manches Larges Col Rond ouvert brodé : rapide et facile à enfiler Idéal en toutes circonstances : en extérieur et en intérieur',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',

     price: 25000,
     count: 1,
   },
   {
     _id: '9',
     title: 'Grand Boubou Bazin Rich',
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/e32e20228373c1265fa3c3077c366d49/621349e1',
       'https://www.upsieutoc.com/images/2020/07/18/img2.jpg',
       'https://www.upsieutoc.com/images/2020/07/18/img3.jpg',
       'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
     ],
     description:
       'Cette vetement est très agréable à porter.   Son tissu est doux, léger et soigneux.   Cette djellaba dispose de manches larges et amples. Cela vous permet d’être totalement libre de vos mouvements.    Enfin, cette vetement a le col brodé, ce qui rajoute du charme à ce vêtement.   Djellaba Moderne avec Manches Larges Col Rond ouvert brodé : rapide et facile à enfiler Idéal en toutes circonstances : en extérieur et en intérieur',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     price: 50000,
     count: 1,
   },
   {
     _id: '10',
     title: 'Fila File Angline 3 Pieces',
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/5e0edebd28c3970158495d7afdda8e1c/82da648e',
     ],
     description:
       'Cette vetement est très agréable à porter.   Son tissu est doux, léger et soigneux.   Cette djellaba dispose de manches larges et amples. Cela vous permet d’être totalement libre de vos mouvements.    Enfin, cette vetement a le col brodé, ce qui rajoute du charme à ce vêtement.   Djellaba Moderne avec Manches Larges Col Rond ouvert brodé : rapide et facile à enfiler Idéal en toutes circonstances : en extérieur et en intérieur',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',

     price: 50000,
     count: 1,
   },
   {
     _id: '11',
     title: 'Fila File',
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/9d62d7b74253d63522457701a065c076/d6af81d3',
       'https://www.upsieutoc.com/images/2020/07/18/img2.jpg',
       'https://www.upsieutoc.com/images/2020/07/18/img3.jpg',
       'https://www.upsieutoc.com/images/2020/07/18/img4.jpg',
     ],
     description:
       'Cette vetement est très agréable à porter.   Son tissu est doux, léger et soigneux.   Cette djellaba dispose de manches larges et amples. Cela vous permet d’être totalement libre de vos mouvements.    Enfin, cette vetement a le col brodé, ce qui rajoute du charme à ce vêtement.   Djellaba Moderne avec Manches Larges Col Rond ouvert brodé : rapide et facile à enfiler Idéal en toutes circonstances : en extérieur et en intérieur',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     price: 20000,
     count: 1,
   },
   {
     _id: '12',
     title: 'Super Cent Angline',
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/294e7506888d46b643289e3ac0e08cb6/b4d8ab7b',
     ],
     description:
       'Cette vetement est très agréable à porter.   Son tissu est doux, léger et soigneux.   Cette djellaba dispose de manches larges et amples. Cela vous permet d’être totalement libre de vos mouvements.    Enfin, cette vetement a le col brodé, ce qui rajoute du charme à ce vêtement.   Djellaba Moderne avec Manches Larges Col Rond ouvert brodé : rapide et facile à enfiler Idéal en toutes circonstances : en extérieur et en intérieur',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',

     price: 20000,
     count: 1,
   },
   {
     _id: '13',
     title: 'Fila File getzner',
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/2eb21385949b01adebb80f64efe6cad4/8a041cab',
     ],
     description:
       'Cette vetement est très agréable à porter.   Son tissu est doux, léger et soigneux.   Cette djellaba dispose de manches larges et amples. Cela vous permet d’être totalement libre de vos mouvements.    Enfin, cette vetement a le col brodé, ce qui rajoute du charme à ce vêtement.   Djellaba Moderne avec Manches Larges Col Rond ouvert brodé : rapide et facile à enfiler Idéal en toutes circonstances : en extérieur et en intérieur',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',

     price: 30000,
     count: 1,
   },
   {
     _id: '14',
     title: 'Ensemble Manteau Wax',
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/c5d699ccd873cd9f8fd1add517fbb1b6/4b712037',
     ],
     description:
       'Cette vetement est très agréable à porter.   Son tissu est doux, léger et soigneux.   Cette djellaba dispose de manches larges et amples. Cela vous permet d’être totalement libre de vos mouvements.    Enfin, cette vetement a le col brodé, ce qui rajoute du charme à ce vêtement.   Djellaba Moderne avec Manches Larges Col Rond ouvert brodé : rapide et facile à enfiler Idéal en toutes circonstances : en extérieur et en intérieur',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',

     price: 20000,
     count: 1,
   },
   {
     _id: '14',
     title: 'Chemise Wax',
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/92d7b9e9bae274a0f016ae0115d17e4c/44227ecd',
     ],
     description:
       'Cette vetement est très agréable à porter.   Son tissu est doux, léger et soigneux.   Cette djellaba dispose de manches larges et amples. Cela vous permet d’être totalement libre de vos mouvements.    Enfin, cette vetement a le col brodé, ce qui rajoute du charme à ce vêtement.   Djellaba Moderne avec Manches Larges Col Rond ouvert brodé : rapide et facile à enfiler Idéal en toutes circonstances : en extérieur et en intérieur',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',

     price: 7000,
     count: 1,
   },
   {
     _id: '15',
     title: 'Getzner 3 Pieces',
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/716b4465622d7193010eb20b91d2c16a/1b2e028d',
     ],
     description:
       'Cette vetement est très agréable à porter.   Son tissu est doux, léger et soigneux.   Cette djellaba dispose de manches larges et amples. Cela vous permet d’être totalement libre de vos mouvements.    Enfin, cette vetement a le col brodé, ce qui rajoute du charme à ce vêtement.   Djellaba Moderne avec Manches Larges Col Rond ouvert brodé : rapide et facile à enfiler Idéal en toutes circonstances : en extérieur et en intérieur',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',

     price: 100000,
     count: 1,
   },
   {
     _id: '16',
     title: 'bazin riche blanc',
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/2458d2a34169c7190b85c7a16bd95536/4c2f2d6a',
     ],
     description:
       'Cette vetement est très agréable à porter.   Son tissu est doux, léger et soigneux.   Cette djellaba dispose de manches larges et amples. Cela vous permet d’être totalement libre de vos mouvements.    Enfin, cette vetement a le col brodé, ce qui rajoute du charme à ce vêtement.   Djellaba Moderne avec Manches Larges Col Rond ouvert brodé : rapide et facile à enfiler Idéal en toutes circonstances : en extérieur et en intérieur',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',

     price: 50000,
     count: 1,
   },
   {
     _id: '17',
     title: 'Costume Colma',
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/ed5bc005e5a586930b8ca010fe2c20f9/6f3428d8',
     ],
     description:
       'Cette vetement est très agréable à porter.   Son tissu est doux, léger et soigneux.   Cette djellaba dispose de manches larges et amples. Cela vous permet d’être totalement libre de vos mouvements.    Enfin, cette vetement a le col brodé, ce qui rajoute du charme à ce vêtement.   Djellaba Moderne avec Manches Larges Col Rond ouvert brodé : rapide et facile à enfiler Idéal en toutes circonstances : en extérieur et en intérieur',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',

     price: 40000,
     count: 1,
   },
 ]);
  return (
   <DataContext.Provider value={[products, setProducts]}>
{props.children}
   </DataContext.Provider>
  )
}
