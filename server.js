const cors = require('cors')
const axios = require('axios')
const express = require('express')

const app = express()

app.use(cors())




app.get('/', async (req, res) => {

   try {
    const response = await axios('https://jsonplaceholder.typicode.com/users')
    

    return res.json(response.data)

   } catch (error) {
       console.error(error)
   }
   
   




    /*

    return res.json([
            {
            name: 'Jose',
            idade: 22,
            peso: '30kilos',
        },
        {
            name: 'Andreza',
            idade: 22,
            peso: '30kilos',
        },
        {
            name: 'Arthur',
            idade: 22,
            peso: '30kilos',
        },      
      ]
    )
    }
    */
}
)



app.listen(4579)