import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"

const Module3 = () => {
  const navigate = useNavigate();
  const [pageName, setPageName] = useState('')
  const [pageTitle, setPageTitle] = useState('')
  const [pageDescription, setPageDescription] = useState('')

  useEffect(() => {
    if (!window.sessionStorage.getItem("auth")) navigate('/unauthorized')
    fetch('http://34.194.99.18/pages/page/3')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setPageName(data.page.page_name)
        setPageTitle(data.page.page_title)
        setPageDescription(data.page.page_description)
    })
    .catch(error => console.error(error));
}, []);

  return (
    <div>

      <h1>CS415 Private Page - Module 3</h1>
      <p><font color="white">This is only accessible when logged in</font></p>

        <h2>{pageName}</h2>
        <p><b>{pageTitle}</b></p>
        <p><font color='white'>{pageDescription}</font></p>
    </div>

  )
}

export default Module3