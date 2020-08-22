import tortabombon from '../assets/products/tortabombon.jpg';
import brownie from '../assets/products/brownie.jpg';
import tartafrutilla from '../assets/products/tartafrutilla.jpg';
import tartafrutal from '../assets/products/tartafrutal.jpg';
import chocopie from '../assets/products/chocopie.jpg';
import lujuriachocolate from '../assets/products/lujuriachocolate.jpg';

export default function Item() {
    return new Promise((res, rej) => {
        setTimeout(() => {
        res([{ id: '1', categoryId: 'tortas', mainProduct: 'yes', name: 'Torta Bombón', img:`${tortabombon}`, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae suscipit tellus mauris a diam maecenas sed.', price: 1000},
            { id: '2', categoryId: 'tortas', name: 'Brownie', img:`${brownie}`, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', price: 900},
            { id: '3', categoryId: 'tartas', mainProduct: 'yes', name: 'Tarta de Frutilla', img:`${tartafrutilla}`, description:'Loren impsun 3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: 720},
            { id: '4', categoryId: 'tartas', name: 'Tarta Frutal', img:`${tartafrutal}`, description:'Loren impsun 4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua.', price: 700},
            { id: '5', categoryId: 'tartas', name: 'Chocopie', img:`${chocopie}`, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elitnt ut labore et dolore magna aliqua.', price: 670},
            { id: '6', categoryId: 'tortas', mainProduct: 'yes', name: 'Lujuria de Chocolate', img:`${lujuriachocolate}`, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ua.', price: 890},
            ]);
        }, 3000);
    });
}
