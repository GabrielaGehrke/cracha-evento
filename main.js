const LinkSocialMedia = {
  github: 'gabrielagehrke',
  youtube: '',
  facebook: 'gabigehrke',
  instagram: 'gabrielasgehrke',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].ref = `https://${social}.com/${LinkSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinkSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })

  //Arrow Function: .them (argumento ou (argumento, argumento2) ou (vazio)=> {...})
}
getGitHubProfileInfos()
