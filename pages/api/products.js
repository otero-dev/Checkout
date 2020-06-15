import client from './js-buy-sdk';
import btoa from 'btoa';

export default (req, res) => {
    const { productId } = req.body;
    let str = `gid://shopify/Product/${productId}`;
    let enc = btoa(str);
    const productPromise = client.product.fetch(enc);
    return Promise.all([productPromise]).then(([product]) => {
        const price = product.variants[0].compareAtPrice;
        let product_images = [];
        for(let img of product.attrs.images) {
          product_images.push(img.src);
        }
        res.status(200).json({images: product_images, price: price});
    });
}
