function Resume() {
  let isMobile: boolean = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)

  if (isMobile) {
    return (<p>PDF integration is not supported on Mobile :(</p>)
  } else {
    return (<object data="/assets/pdfs/myResume.pdf" width={'100%'} height={'95%'}></object>)
  }
}

export default Resume