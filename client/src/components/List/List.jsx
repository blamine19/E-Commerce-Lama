import React from 'react'
import "./List.scss"
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'


const List = (props) => {


  const str = props.subCats.map(item => (`&[filters][sub-categories][id][$eq]=${item}`))

  const { data, loading, error } = useFetch(`/api/products?populate=*
  &filters[price][$lte]=${props.maxPrice}
  &filters[categories][id][$eq]=${props.catId}
  ${str}
  &sort[0]=price:${props.sort}`)


  /*const modifiedData = data?.map( (item) => ({
    id: item.id,
    attributes: { item.id, {... item.attributes}},

  }))*/

  
  return (

    <div className="list">
      {

        loading ? "loading" :
        data?.map(item =>           
            (<Card item={item.attributes} key={item.id} id={item.id} />)

          )
      }
    </div>
  )
}

export default List