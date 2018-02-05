import { Component } from '@angular/core';

@Component({
  selector:'NavBar',
  template:`
  <nav class="navbar navbar-default">
<div class="container-fluid">
<!-- Brand and toggle get grouped for better mobile display -->
<div class="navbar-header">
  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
    <span class="sr-only">Toggle navigation</span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
  </button>
  <a class="navbar-brand" href="#">HK APP</a>
</div>

<!-- Collect the nav links, forms, and other content for toggling -->
<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  <ul class="nav navbar-nav">
     <li><a href="#"><span class="glyphicon glyphicon-th" aria-hidden="true"></span> Dashboard</a></li>
     <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tasks <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li><a href="#"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Overview</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> New Task</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#">Categories</a></li>
      </ul>
    </li>
    <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Contacts <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li><a href="#">Übersicht</a></li>
        <li><a href="#">New Contact</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#">Categories</a></li>
      </ul>
    </li>
  <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Notes <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li><a href="#">Overview</a></li>
        <li><a href="#">New Notiz</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#">Notebooks</a></li>
      </ul>
  </li>
  <li><a href="#">Accounts</a></li>
  <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Learnings <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li><a href="#">Overview</a></li>
        <li><a href="#">New Learning</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#">Categories</a></li>
      </ul>
  </li>
  <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Log <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li><a href="#">Overview</a></li>
        <li><a href="#">New Entry</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#">Topics</a></li>
      </ul>
  </li>
  </ul>
  
</div>
</div>
</nav>


  `,
  styles:[`


  `]


})

export class NavBarClas{


}
