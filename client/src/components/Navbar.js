import React from "react";

function Navbar() {
  return (
    <div>
      <div class="nav-tabs-navigation">
        <div class="nav-tabs-wrapper">
          <ul id="tabs" class="nav nav-tabs" data-tabs="tabs">
            <li class="active">
              <a href="#home" data-toggle="tab">
                Home
              </a>
            </li>
            <li>
              <a href="#profile" data-toggle="tab">
                Profile
              </a>
            </li>
            <li>
              <a href="#messages" data-toggle="tab">
                Messages
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="my-tab-content" class="tab-content text-center">
        <div class="tab-pane active" id="home">
          <p>Here is information about home.</p>
        </div>
        <div class="tab-pane" id="profile">
          <p>Here is your profile.</p>
        </div>
        <div class="tab-pane" id="messages">
          <p>Here are your messages.</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
