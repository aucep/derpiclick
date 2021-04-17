browser.menus.create({
	"title": "open in derpi",
	"id": "derpi-open",
	"contexts": ["image"]
});
const reg = /(?<=derpicdn\.net\/img\/\d+\/\d+\/\d+\/)\d+/;
browser.menus.onClicked.addListener((info,tab) => {
	if (info.menuItemId == "derpi-open") {
		const id = info.srcUrl.match(reg);
		if (id) browser.tabs.create({
			"url": "https://derpibooru.org/images/"+id[0]
		});
	}
});
