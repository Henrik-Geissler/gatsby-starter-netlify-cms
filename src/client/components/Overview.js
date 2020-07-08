import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Overview = ({ user }) => (
  <Jumbotron>
    <nav aria-label='Page navigation example'>
      <ul className='pagination justify-content-center'>
        <li className='page-item disabled'>
          <a className='page-link' href='javascript: void(0);' tabIndex='-1'>
            Previous
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='javascript: void(0);'>
            1
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='javascript: void(0);'>
            2
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='javascript: void(0);'>
            3
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='javascript: void(0);'>
            Next
          </a>
        </li>
      </ul>
    </nav>
  </Jumbotron>
)

export default Overview
