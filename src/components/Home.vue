<template>
  <div class="container">
    <div class="card" style="width: 80%; margin-left: auto; margin-right: auto; border-radius: 10px; background-color: #2c3e50">
      <div class="card-body" style="margin-left:auto; margin-right: auto;">
        <ul class="top">
        <li class="top"><button style="outline:none; color:darkgray; border: none; background-color: #2c3e50" v-on:click="flipToday"  class="card-link">Day</button></li>
        <li class="top"><button style="outline:none; color:darkgray; border: none; background-color: #2c3e50"  v-on:click="flipToweek"  class="card-link">Week</button></li>
        </ul>

      </div>
      <hr style="color: darkgray; background-color: #b7d0e2;">
      <div v-if="day">

        <p style="color: darkgray; font-weight: bolder">{{date}}</p>
        <button style="background-color:#2c3e50; outline:none; border:none"  v-on:click="addDay"><span style="color: darkgray; margin-right: 20%; position: absolute; top:110px; right: 170px; font-size: 20px">&#62;</span></button>
        <button style="background-color:#2c3e50; outline:none; border: none" v-on:click="subtractDay"><span style="border:none; color: darkgray; margin-right: 41%; position: absolute; top:110px; right: 170px; font-size: 20px">&#60;</span></button>

        <div class="input-group mb-3" style="width: 90%; margin-left:auto; margin-right: auto;">
          <button data-toggle="modal" data-target="#exampleModal"  style=" background-color: #2c3e50; color: darkgray" class="form-control" ><i style="float:left" class="bi bi-list"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>      Add a task...</i></button>

        </div>
        <!-- Button trigger modal -->
<!--        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">-->
<!--          Launch demo modal-->
<!--        </button>-->

        <!-- Modal -->
        <div style="opacity: 1" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" >
            <div class="modal-content" style="background-color: #2c3e50">
              <div class="modal-header">
                    <h5 style="color: darkgray" class="modal-title" id="exampleModalLabel"> ADD A TASK</h5>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <input style="background-color: #2c3e50" placeholder="Todo description" type="text" class="form-control">
                  <br>

                  <input style="background-color: #2c3e50" type="text" class="form-control" placeholder="memo">
                  <br>

                  <button type="button" class="btn btn-danger" style="float: left">Add Task</button>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal" style="float: right">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div v-for="todo in todos" :key="todo.id">
        <ul class="list-group" style="background-color: #2c3e50; margin-right: auto; margin-left: auto">
          <li class="list-group-item" style="float: left; background-color: #2c3e50; color: darkgray;"><input type="checkbox" style="background-color: #2c3e50; float: left; width: 15px; height:15px"><p style="float:left; padding-left: 20px; font-size: 15px">{{todo.todo|| 'empty'}}</p><p  style="padding-left: 38px;font-size: 15px; color: dimgrey;clear: both; float: left">{{todo.memo}}</p><a style="float: right" class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">
            <svg style="color: darkgray" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
              <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
            </svg>

          </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="background-color: #2c3e50">
              <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
              </svg>  Pin on the top</a>
              <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sticky-fill" viewBox="0 0 16 16">
                <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V9.5z"/>
              </svg>  Edit memo</a>
              <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
              </svg>  Delete</a>
            </div>
          </li>

        </ul>
        </div>
      </div>
      <div v-if="week">
        <div class="flex-row">
        <p style="color: darkgray; font-weight: bolder; width:50%; display:inline!important; ">{{weekdays}}  </p>
        <p style="color: darkgray; font-weight: bolder; display: inline">- {{weekday}}</p>
          <div>
          <p style="color: darkgray; font-size:10px; margin-left: auto; margin-right: auto;display:inline!important;" >{{week_day}}  </p>
          <p style="color: darkgray; font-size:10px; margin-left: auto; margin-right: auto;display:inline;" >  -  </p>
          <p style="color: darkgray; font-size:10px; margin-left: auto; margin-right: auto; display:inline;"> {{week_days}}  </p>
          </div>
          <div class="input-group mb-3" style="width: 90%; margin-left:auto; margin-right: auto; margin-top: 10px">
            <button data-toggle="modal" data-target="#exampleModal1"  style=" background-color: #2c3e50; color: darkgray" class="form-control" ><i style="float:left" class="bi bi-list"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>    Add a task...</i></button>

          </div>

          <div style="opacity: 1" class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div class="modal-dialog" >
              <div class="modal-content" style="background-color: #2c3e50">
                <div class="modal-header">
                  <h5 style="color: darkgray" class="modal-title" id="exampleModalLabel1"> ADD A TASK</h5>

                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <input style="background-color: #2c3e50" placeholder="Todo description" type="text" class="form-control">
                    <br>

                    <input style="background-color: #2c3e50" type="text" class="form-control" placeholder="memo">
                    <br>

                    <button type="button" class="btn btn-danger" style="float: left">Add Task</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" style="float: right">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button style="background-color:#2c3e50; outline:none; border:none"><span style="color: darkgray; margin-right: 20%; position: absolute; top:130px; right: 170px; font-size: 20px">&#62;</span></button>
        <button style="background-color:#2c3e50; outline:none; border:none"><span style="color: darkgray; margin-right: 41%; position: absolute; top:130px; right: 170px; font-size: 20px">&#60;</span></button>

<!--        <div v-for="todo in weeks_data" :key="todo.id">-->
<!--          <p style="color: darkgray">{{todo.created_at}}</p>-->
<!--          <ul class="list-group" style="background-color: #2c3e50; margin-right: auto; margin-left: auto">-->
<!--            <li class="list-group-item" style="float: left; background-color: #2c3e50; color: darkgray;"><input type="checkbox" style="background-color: #2c3e50; float: left; width: 15px; height:15px"><p style="float:left; padding-left: 20px; font-size: 15px">{{todo.todo|| 'empty'}}</p><p  style="padding-left: 38px;font-size: 15px; color: dimgrey;clear: both; float: left">{{todo.memo}}</p><a style="float: right" class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">-->
<!--              <svg style="color: darkgray" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">-->
<!--                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>-->
<!--                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>-->
<!--              </svg>-->

<!--            </a>-->
<!--              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="background-color: #2c3e50">-->
<!--                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">-->
<!--                  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>-->
<!--                </svg>  Pin on the top</a>-->
<!--                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sticky-fill" viewBox="0 0 16 16">-->
<!--                  <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V9.5z"/>-->
<!--                </svg>  Edit memo</a>-->
<!--                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">-->
<!--                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>-->
<!--                </svg>  Delete</a>-->
<!--              </div>-->
<!--            </li>-->

<!--          </ul>-->
<!--        </div>-->
        <div v-for="todo in weeks_data" :key="todo.id">
        <div v-if="todo.created_at === 'Monday'">
          <p style="color: darkgray; float:left; margin-left: 10px; font-size: 15px">{{  }}</p>
          <hr style="background-color: black">
          <p style="color: darkgray">Monday</p>-->
                    <ul class="list-group" style="background-color: #2c3e50; margin-right: auto; margin-left: auto">
                      <li class="list-group-item" style="float: left; background-color: #2c3e50; color: darkgray;"><input type="checkbox" style="background-color: #2c3e50; float: left; width: 15px; height:15px"><p style="float:left; padding-left: 20px; font-size: 15px">{{todo.todo|| 'empty'}}</p><p  style="padding-left: 38px;font-size: 15px; color: dimgrey;clear: both; float: left">{{todo.memo}}</p><a style="float: right" class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">
                        <svg style="color: darkgray" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                          <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                        </svg>

                      </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="background-color: #2c3e50">
                          <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                            <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
                          </svg>  Pin on the top</a>
                          <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sticky-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V9.5z"/>
                          </svg>  Edit memo</a>
                          <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                          </svg>  Delete</a>
                        </div>
                      </li>

                    </ul>

        </div>
        <div v-if="todo.created_at === 'Tuesday'">
          <hr style="background-color: black">
          <p style="color: darkgray">Tuesday</p>-->
          <ul class="list-group" style="background-color: #2c3e50; margin-right: auto; margin-left: auto">
            <li class="list-group-item" style="float: left; background-color: #2c3e50; color: darkgray;"><input type="checkbox" style="background-color: #2c3e50; float: left; width: 15px; height:15px"><p style="float:left; padding-left: 20px; font-size: 15px">{{todo.todo|| 'empty'}}</p><p  style="padding-left: 38px;font-size: 15px; color: dimgrey;clear: both; float: left">{{todo.memo}}</p><a style="float: right" class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">
              <svg style="color: darkgray" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
              </svg>

            </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="background-color: #2c3e50">
                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
                </svg>  Pin on the top</a>
                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sticky-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V9.5z"/>
                </svg>  Edit memo</a>
                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>  Delete</a>
              </div>
            </li>

          </ul>

        </div>
        <div v-if="todo.created_at === 'Wednesday'">
          <p style="color: darkgray; float:left;font-size: 15px">Wednesday</p>
          <hr style="background-color: black">
          <p style="color: darkgray">Wednesday</p>-->
          <ul class="list-group" style="background-color: #2c3e50; margin-right: auto; margin-left: auto">
            <li class="list-group-item" style="float: left; background-color: #2c3e50; color: darkgray;"><input type="checkbox" style="background-color: #2c3e50; float: left; width: 15px; height:15px"><p style="float:left; padding-left: 20px; font-size: 15px">{{todo.todo|| 'empty'}}</p><p  style="padding-left: 38px;font-size: 15px; color: dimgrey;clear: both; float: left">{{todo.memo}}</p><a style="float: right" class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">
              <svg style="color: darkgray" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
              </svg>

            </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="background-color: #2c3e50">
                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
                </svg>  Pin on the top</a>
                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sticky-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V9.5z"/>
                </svg>  Edit memo</a>
                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>  Delete</a>
              </div>
            </li>

          </ul>

        </div>
        <div v-if="todo.created_at === 'Thursday'">
          <hr style="background-color: black">
          <p style="color: darkgray">Thursday</p>-->
          <ul class="list-group" style="background-color: #2c3e50; margin-right: auto; margin-left: auto">
            <li class="list-group-item" style="float: left; background-color: #2c3e50; color: darkgray;"><input type="checkbox" style="background-color: #2c3e50; float: left; width: 15px; height:15px"><p style="float:left; padding-left: 20px; font-size: 15px">{{todo.todo|| 'empty'}}</p><p  style="padding-left: 38px;font-size: 15px; color: dimgrey;clear: both; float: left">{{todo.memo}}</p><a style="float: right" class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">
              <svg style="color: darkgray" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
              </svg>

            </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="background-color: #2c3e50">
                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
                </svg>  Pin on the top</a>
                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sticky-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V9.5z"/>
                </svg>  Edit memo</a>
                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>  Delete</a>
              </div>
            </li>

          </ul>

        </div>
        <div v-if="todo.created_at === 'Friday'">
          <hr style="background-color: black">
          <p style="color: darkgray">Friday</p>
          <ul class="list-group" style="background-color: #2c3e50; margin-right: auto; margin-left: auto">
            <li class="list-group-item" style="float: left; background-color: #2c3e50; color: darkgray;"><input type="checkbox" style="background-color: #2c3e50; float: left; width: 15px; height:15px"><p style="float:left; padding-left: 20px; font-size: 15px">{{todo.todo|| 'empty'}}</p><p  style="padding-left: 38px;font-size: 15px; color: dimgrey;clear: both; float: left">{{todo.memo}}</p><a style="float: right" class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">
              <svg style="color: darkgray" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
              </svg>

            </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="background-color: #2c3e50">
                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
                </svg>  Pin on the top</a>
                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sticky-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V9.5z"/>
                </svg>  Edit memo</a>
                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>  Delete</a>
              </div>
            </li>

          </ul>

        </div>
        <div v-if="todo.created_at === 'Saturday'">
          <hr style="background-color: black">
          <p style="color: darkgray">Saturday</p>
          <ul class="list-group" style="background-color: #2c3e50; margin-right: auto; margin-left: auto">
            <li class="list-group-item" style="float: left; background-color: #2c3e50; color: darkgray;"><input type="checkbox" style="background-color: #2c3e50; float: left; width: 15px; height:15px"><p style="float:left; padding-left: 20px; font-size: 15px">{{todo.todo|| 'empty'}}</p><p  style="padding-left: 38px;font-size: 15px; color: dimgrey;clear: both; float: left">{{todo.memo}}</p><a style="float: right" class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">
              <svg style="color: darkgray" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
              </svg>

            </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="background-color: #2c3e50">
                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
                </svg>  Pin on the top</a>
                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sticky-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V9.5z"/>
                </svg>  Edit memo</a>
                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>  Delete</a>
              </div>
            </li>

          </ul>

        </div>
        <div v-if="todo.created_at === 'Sunday'">
          <hr style="background-color: black">
          <p style="color: darkgray">Sunday</p>-->
          <ul class="list-group" style="background-color: #2c3e50; margin-right: auto; margin-left: auto">
            <li class="list-group-item" style="float: left; background-color: #2c3e50; color: darkgray;"><input type="checkbox" style="background-color: #2c3e50; float: left; width: 15px; height:15px"><p style="float:left; padding-left: 20px; font-size: 15px">{{todo.todo|| 'empty'}}</p><p  style="padding-left: 38px;font-size: 15px; color: dimgrey;clear: both; float: left">{{todo.memo}}</p><a style="float: right" class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">
              <svg style="color: darkgray" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
              </svg>

            </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="background-color: #2c3e50">
                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
                </svg>  Pin on the top</a>
                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sticky-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V9.5z"/>
                </svg>  Edit memo</a>
                <a class="dropdown-item" href="#" style="color: darkgray"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>  Delete</a>
              </div>
            </li>

          </ul>

        </div>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
import moment from 'moment'
import axios from "axios";
// import store from "../store";
export default {
  name: "Home",
  mounted() {
    this.getDate();
    this.getWeek();
    "use strict";
    var underlineMenuItems = document.querySelectorAll("ul li");
    underlineMenuItems[0].classList.add("active");
    underlineMenuItems.forEach(function (item) {
      item.addEventListener("click", function () {
        underlineMenuItems.forEach(function (item) { return item.classList.remove("active"); });
        item.classList.add("active");
      });
    });
  },
  data() {
    return {
      day: true,
      week:false,
      weekdays:moment().startOf('isoWeek').format('YYYY/MM/DD'),
      weekday:moment().startOf('isoWeek').add(1, 'weeks').format('YYYY/MM/DD'),
      week_day:moment().startOf('isoWeek').format('dddd'),
      week_days:moment().startOf('isoWeek').add(1, 'weeks').format('dddd'),
      date:moment().format('ll'),
      yesterday:null,
      token:localStorage.getItem('token'),
      todos:null,
      weeks_data:null,
      weekday_looper:null
    };
  },
  methods:{
    flipToday:function(){
      this.week = false
      this.day = true
    },
    flipToweek:function(){
      this.day = false
      this.week = true
    },
    subtractDay: function(){
      this.date = moment(this.date).subtract(1, 'day').format('ll')
      this.weekday = moment(this.date).subtract(1, 'day')
      this.getDate()
    },
    addDay: function(){
      this.date = moment(this.date).add(1, 'day').format('ll')
      this.weekday = moment(this.weekday).add(1, 'day').format('dddd')
      this.getDate()
    },
    getDate:function(){
      axios.get('todos/get_date/' +this.date, {
        headers: {
          Authorization: 'Bearer ' + this.token,
          ContentType: 'application/json',
          Accept: 'application/json',
        }
      }).then(response => {
        this.todos = response.data.data
        console.log(response.data.data)
      }).catch(error => {
        console.log(error)
      });
    },
    getWeek:function(){
      axios.get('todos/get_week/' +this.date, {
        headers: {
          Authorization: 'Bearer ' + this.token,
          ContentType: 'application/json',
          Accept: 'application/json',
        }
      }).then(response => {
        this.weeks_data = response.data.data
        console.log(response.data.data)
      }).catch(error => {
        console.log(error)
      });
    }
  }
}

</script>

<style scoped>
ul.top {
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
}
ul.top:hover li.top:not(:hover) a.top {
  opacity: 0.2;
}
ul.top li.top {
  position: relative;
  padding: 5px 1px 5px 1px;
  cursor: pointer;
}
ul.top li.top::after {
  position: absolute;
  content: "";
  top: 100%;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgb(255,0,127);
  transform: scaleX(0);
  transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}
ul.top li.top:hover::after, ul.top li.top.active::after {
  transform: scaleX(1);
}
ul.top li.top a.top {
  position: relative;
  display: flex;
  color: white;
  font-family: Lato, sans-serif;
  text-decoration: none;
  transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}
input{
  vertical-align: bottom;
}
</style>