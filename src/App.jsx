import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";


class App extends React.Component {
  componentDidMount() {
      $(window).load(function(){
          $('#loader-wrapper').delay(500).fadeOut();
          $('body').addClass('loaded');
      });

      var current_item = 0;
      var section_hide_time = 1000;
      var section_show_time = 1000;
      $('a', '.overlay-menu').click(function() {
        if( ! $(this).hasClass('active') ) {
          current_item = this;
          $('.section:visible').fadeOut( section_hide_time, function() {
            $('a', '.overlay-menu').removeClass( 'active' );
            $(current_item).addClass( 'active' );
            var new_section = $( $(current_item).attr('href') );
            new_section.fadeIn( section_show_time );
          } );
        }
        return false;
      });

      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if( $(this).scrollTop() != 0 )
    {
      $(".button_container").css('opacity', '0.3');
    }
    else
    {
      $(".button_container").css('opacity', '1');
    }
  }

  render() {
    return (
      <Router>
        <Routes/>
      </Router>
    );
  }
}

export default App;
