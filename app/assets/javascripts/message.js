$(function(){
  
  function buildHTML(message) {
    if (message.content && message.image) {
      var html = `<div class="message">
                    <div class="upper-message">
                      <div class="upper-message__user-name"> 
                        ${message.user_name}
                      </div> 
                      <div class="upper-message__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="lower-message"> 
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                      <img src=" ${message.image} " class="lower-message__image" >
                    </div>
                  </div>`
    } else if (message.content) {
      var html = `<div class="message">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.user_name}
                      </div> 
                      <div class="upper-message__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="lower-message">
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                    </div>
                  </div>`
    } else if (message.image) {
      var html = `<div class="message">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.user_name}
                      </div>
                      <div class="upper-message__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="lower-message">
                      <img src=" ${message.image} " class="lower-message__image" >
                    </div>
                  </div>`
    };
    return html;
  }


  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.chat_main__message-list').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('form')[0].reset();
      $('.send_message_btn').prop('disabled', false);
    })
    .fail(function(){
        alert("メッセージ送信に失敗しました");
    })
  });
})