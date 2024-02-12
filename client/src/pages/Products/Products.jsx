import React, { useState } from 'react'
import "./Products.scss"
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { useParams } from 'react-router';
import List from '../../components/List/List';
import useFetch from '../../hooks/useFetch';

const Products = () => {

  const [priceFilter, setPriceFilter] = useState(65)

  const catId = parseInt(useParams().id)

  const [maxPrice, setMaxPrice] = useState(100000)

  const [sort, setSort] = useState('asc')

  const [selectedSubCats, setSelectedSubCats] = useState([])


  const handleCheck = (e) => {

    const value = e.target.value
    const isChecked = e.target.checked

    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item !== value  ))
    
   
  }

  console.log(selectedSubCats)

 
  const { data, loading, error } = useFetch(`/api/sub-categories?[filters][categories][id][$eq]=${catId}`)


  return (

    <div className='products'>
     

      <div className="leftProducts">
        <div className="filterItem"><h4>Product Categories</h4></div>
        <div className="filterItem">
          <FormGroup size="small">
            {
              data?.map((item) => (
                <FormControlLabel control={<Checkbox size="small" value={item.id} />} key={item.id} label={item.attributes.title} 
                style={{ marginTop: '-5px' }}
                onChange={handleCheck}/>
              ))
            }
          </FormGroup>
        </div>
        <div className="filterItem" style={{ marginTop: '11px' }}><h4>Filter by price</h4></div>
        <div className="filterItem">
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <span>0</span>&nbsp;
            <Slider aria-label="Volume" value={maxPrice} min={0} max={100000} onChange={(e) => setMaxPrice(e.target.value)} />
            &nbsp; <span>{maxPrice}</span>
          </Stack>
        </div>
        <div className="filterItem" style={{ marginTop: '11px' }}><h4>Sort by</h4></div>
        <div className="filterItem">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="options"
            >
              <FormControlLabel name="options" value={"asc"} control={<Radio size="small" />} label="Price (Lowest First)" onChange={e => setSort("asc")} />
              <FormControlLabel name="options" value={"desc"} control={<Radio size="small" />} label="Price (Highest First)" onChange={e => setSort("desc")} style={{ marginTop: '-15px' }} />
            </RadioGroup>
          </FormControl>
        </div>
      </div>


      <div className="rightProducts">
        <div className="topRightProducts">
          <img src="https://m.media-amazon.com/images/I/612h7c4bDpL._AC_SL1500_.jpg" alt="" />
        </div>

        <div className="bottomRightProducts">
          <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
        </div>

      </div>

    </div>
  )
}

export default Products