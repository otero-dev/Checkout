import axios from 'axios';

export default (req, res) => {
    const { userCode } = req.body;
    axios.get(`https://${process.env.API_KEY}:${process.env.SHARED_SECRET}@${process.env.STORE_URL}/admin/api/2020-04/price_rules.json`)
      .then(response => {
        const discount_data = response.data.price_rules;
        const filtered = discount_data.filter(el => el.title === userCode);
        if(filtered.length > 0) res.status(200).json(filtered);
        else res.status(200).json([])
        
      })
      .catch(err => {
        res.status(500).json({message: 'internal server error'});
      })  
}
