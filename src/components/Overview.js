import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Overview = ({ user }) => (
  <Jumbotron>
<nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
        <li class="page-item disabled">
            <a class="page-link" href="javascript: void(0);" tabindex="-1">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="javascript: void(0);">1</a></li>
        <li class="page-item"><a class="page-link" href="javascript: void(0);">2</a></li>
        <li class="page-item"><a class="page-link" href="javascript: void(0);">3</a></li>
        <li class="page-item">
            <a class="page-link" href="javascript: void(0);">Next</a>
        </li>
    </ul>
</nav>
        
  </Jumbotron>
)

export default Overview
