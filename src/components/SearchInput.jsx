import React from 'react'

const SearchInput = (props) => {

  return (
    <>
        <form className='a'  >
            <input  type='text' placeholder='search' onChange={(e=>props.setSearch(e.target.value))}  ></input>
            <button  type='button'  > Search</button>
        </form>
    </>
    )
}

export default SearchInput