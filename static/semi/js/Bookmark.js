class Bookmark {
    constructor(manager){
        this.dataManager = manager
        this.bookmarkHtmlObject = this.createBookmarkHtmlContainer()
        manager.overallWrapperHtmlObject.append(this.bookmarkHtmlObject)
        this.bookmarkArray = []
    }

    createBookmarkHtmlContainer(){
        let bookmarkHtmlObject = document.createElement("div")
        bookmarkHtmlObject.classList.add("bookmark")
        bookmarkHtmlObject.style.height = "100vh";
        return bookmarkHtmlObject
    }

    addToBookmark(titleData){
        let bookmark = document.createElement("h3")
        bookmark.innerHTML = titleData["data"]
        this.bookmarkHtmlObject.append(bookmark)

        bookmark.addEventListener("click", function(){
            titleData["titleHtmlObject"].scrollIntoView()

        })

    }
}
