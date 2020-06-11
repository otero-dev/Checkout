import axios from 'axios';

export default (req, res) => {
    const { productId } = req.body;
    axios.get(`https://${process.env.API_KEY}:${process.env.SHARED_SECRET}@${process.env.STORE_URL}/admin/products/${productId}/metafields.json?limit=250`)
      .then(response => {
        const metadata = response.data.metafields.filter(field => field.namespace === 'Ultra')
        res.send(metadata);
      })
      .catch(err => {
        res.status(500).json({message: 'internal server error'});
      })  
}
