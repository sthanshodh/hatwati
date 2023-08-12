(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_C523D811_C8D2_B747_41E7_3DC61B534B76], 'cardboardAvailable')",
 "data": {
  "name": "Player485"
 },
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "children": [
  "this.MainViewer",
  "this.IconButton_C523D811_C8D2_B747_41E7_3DC61B534B76"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "scripts": {
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "existsKey": function(key){  return key in window; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "registerKey": function(key, value){  window[key] = value; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "gap": 10,
 "height": "100%",
 "class": "Player",
 "shadow": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "definitions": [{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 162.37,
  "pitch": 5.14
 },
 "class": "PanoramaCamera",
 "id": "camera_F8956F22_E804_322C_41E2_1B95DEF1DF5F",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D",
 "thumbnailUrl": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "11. Sundar 360 06",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E55E26BC_C4DA_907C_41D2_90D8F317F5A5"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 44.08,
  "pitch": 2.94
 },
 "class": "PanoramaCamera",
 "id": "camera_E6CC9B6A_E804_323C_41EA_BF9C3C38BC24",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA",
 "thumbnailUrl": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "09. Kapaleshwar 360 09",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E8ADB2D0_C445_9005_41E8_3A0488AF4E3F",
  "this.overlay_E8AA5378_C446_B005_41E1_2428FC0F19A3",
  "this.overlay_E8146B4F_C447_901B_41E5_3902415A1980"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 133.71,
  "pitch": -2.2
 },
 "class": "PanoramaCamera",
 "id": "camera_E6777B0C_E804_33F5_41EC_B868F5478DFC",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -162.37,
  "pitch": -1.47
 },
 "class": "PanoramaCamera",
 "id": "camera_E7A05E09_E804_35FC_41DB_A78176B994A2",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 2.94
 },
 "class": "PanoramaCamera",
 "id": "camera_E65F4AFD_E804_3214_41E0_C76684FDFECB",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F",
 "thumbnailUrl": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "09. Kapaleshwar 360 03",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E9F11374_C445_900D_41DA_3F9F013307A6",
  "this.overlay_E991177E_C47A_B0FD_41DF_9BB2C8998A95"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.2,
  "pitch": 5.14
 },
 "class": "PanoramaCamera",
 "id": "camera_F912BF7F_E804_3213_41D3_53B9AFD5FEE1",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A8795465_A220_6C25_41D5_DBAD541AD55C",
 "thumbnailUrl": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 02",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_AC90E7D2_A220_2C04_41E4_04BEE931BA6D",
  "this.overlay_B30ADB6F_A220_641B_41C5_E89BB69E8254",
  "this.overlay_CEB5EF44_C0E8_1872_41DF_0B844A722642"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.73,
  "pitch": 1.47
 },
 "class": "PanoramaCamera",
 "id": "camera_E6D8F0E7_E804_2E34_41DC_EAC9E1E12E86",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E71FFD9B_E804_3613_417C_8118EDE04CA7",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A856030D_A220_65EA_41E3_78590B588A1B",
 "thumbnailUrl": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 15",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_AC85CE97_A260_3C59_41E1_FC3DB9C8D8C0",
  "this.overlay_CE8E36F1_C0E8_08B3_41B6_2563AEDCA45C"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_camera",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85BA869_A220_642A_41A6_32FCBD974DCD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A84C7191_A220_24FA_41E2_8125807332B8",
 "thumbnailUrl": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 24",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_ACE08B53_A260_24D0_41C1_4E3538E014CB",
  "this.overlay_B2437FE6_A26F_FBF0_41D8_1F20F2DC819B",
  "this.overlay_ACFF7F24_A260_1C7C_41DF_316905D445A9",
  "this.overlay_CEB73011_C0F8_0789_41DB_466C3D60AA8D",
  "this.overlay_CB5F2398_C445_B004_41AF_23E76E12DE9A"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84C7191_A220_24FA_41E2_8125807332B8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A856030D_A220_65EA_41E3_78590B588A1B"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685",
 "thumbnailUrl": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 16",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_AC9F9A67_A260_E4FA_41D2_742A26A60218",
  "this.overlay_CEF110BF_C0F8_08A0_41E0_0C5FACFC06E7",
  "this.overlay_CD791981_C0F8_795A_41D3_7B2DA9FFF0DA"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.24,
  "pitch": 2.94
 },
 "class": "PanoramaCamera",
 "id": "camera_F931AF8F_E804_32F4_41D5_E14E53679A28",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_camera",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8510386_A220_24E7_41C5_C72999B28587"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84C7191_A220_24FA_41E2_8125807332B8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062",
 "thumbnailUrl": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 12",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_ACC7DEED_A260_3DF5_41DD_25D12172FE88",
  "this.overlay_CEE9BA1E_C0F8_7BB3_41C8_BB11368BCBB2",
  "this.overlay_CA516157_C44A_900B_41CB_573EE4859FA1"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8A78F72_A220_1C3E_41CB_69834D123426"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73",
 "thumbnailUrl": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 05",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_ACA42ABC_A220_247B_41C7_2311F2FD4EB0",
  "this.overlay_CEF34270_C0E8_0823_41E3_2AC3850B0763",
  "this.overlay_CF29F307_C0E8_09E2_41E2_3C45B4D81096"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 10.29
 },
 "class": "PanoramaCamera",
 "id": "camera_E6B9F0C8_E804_2E7C_41E7_4934D9AF0D0D",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.18,
  "pitch": 2.94
 },
 "class": "PanoramaCamera",
 "id": "camera_E7488DBA_E804_361D_41C2_2914FDAD898F",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 29.39,
  "pitch": 3.67
 },
 "class": "PanoramaCamera",
 "id": "camera_E67E605A_E804_2E1D_4191_544CCF430C4E",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E6459CA1_E804_362F_41EC_BB08DDDD9FD1",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F805F1FF_E804_2E14_41E7_7268F287C88F",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_E3432908_C4C7_7005_41E4_68FAA7254296",
 "thumbnailUrl": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "13. Panvati 360 01 01",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E8CC43F4_C4CA_B00D_41DC_2FFA880864F4",
  "this.overlay_E2D29C6E_C4CE_F01D_41C7_08810A03E337",
  "this.overlay_EE60D717_C44E_900B_41D3_B8D0C2C58144"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 139.59,
  "pitch": -1.47
 },
 "class": "PanoramaCamera",
 "id": "camera_E6A750B8_E804_2E1C_41E6_09F3F036EF61",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -74.2,
  "pitch": 8.08
 },
 "class": "PanoramaCamera",
 "id": "camera_E6952089_E804_2EFC_41E7_2527322251C3",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 10.29
 },
 "class": "PanoramaCamera",
 "id": "camera_E773A173_E804_2E13_41C6_3B3AA4F0FF86",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 19.1,
  "pitch": 1.47
 },
 "class": "PanoramaCamera",
 "id": "camera_F877EF03_E804_33EC_41D2_28350D0C4049",
 "manualRotationSpeed": 600
},
{
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_C523D811_C8D2_B747_41E7_3DC61B534B76",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_rotation"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -148.41,
  "pitch": -1.47
 },
 "class": "PanoramaCamera",
 "id": "camera_E7F791EF_E804_2E33_41DF_0B889A906C79",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 43.35,
  "pitch": -0.73
 },
 "class": "PanoramaCamera",
 "id": "camera_E73B4144_E804_2E75_41E9_514CFBCFE169",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E6548AED_E804_3234_41D0_2937975AE517",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.73,
  "pitch": 13.96
 },
 "class": "PanoramaCamera",
 "id": "camera_F960AFBE_E804_3214_41E1_CD1C1283C203",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848",
 "thumbnailUrl": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 01",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E9D74FA1_C168_3A3A_41B2_ED6DF21B2A60"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -25.71,
  "pitch": 3.67
 },
 "class": "PanoramaCamera",
 "id": "camera_E6F7DD7C_E804_3614_41EA_CE6565940A16",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.24,
  "pitch": 2.94
 },
 "class": "PanoramaCamera",
 "id": "camera_E6AF10B8_E804_2E1C_41DF_E6BD19DF4520",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E72B4DAB_E804_363C_41EC_3A6FEB8BCEF4",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -17.63,
  "pitch": 3.67
 },
 "class": "PanoramaCamera",
 "id": "camera_E7E651E0_E804_2E2C_41DC_459724774E1A",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE",
 "thumbnailUrl": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 18",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CED9E572_C0E8_09D8_41D3_6E3D9A3FB0F3",
  "this.overlay_CE6C8DB7_C0E8_1951_41CA_7370AF8574DF",
  "this.overlay_CEA988E7_C0E8_18E2_41E3_F5012BABA058",
  "this.overlay_CD936216_C0E8_0B27_41A9_5E9C66DBBF9E"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -74.94,
  "pitch": 3.67
 },
 "class": "PanoramaCamera",
 "id": "camera_F98DDFDD_E804_3217_41D6_EE0ED61994CD",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 128.57,
  "pitch": -0.73
 },
 "class": "PanoramaCamera",
 "id": "camera_E7526C16_E804_3614_41CE_CE1B9A7C47ED",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3432908_C4C7_7005_41E4_68FAA7254296"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92",
 "thumbnailUrl": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "Sundarache deul new 01 01",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/f/0/{row}_{column}.jpg",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/f/1/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/f/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/f/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/f/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/u/0/{row}_{column}.jpg",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/u/1/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/u/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/u/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/u/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/r/0/{row}_{column}.jpg",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/r/1/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/r/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/r/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/r/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/b/0/{row}_{column}.jpg",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/b/1/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/b/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/b/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/b/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/d/0/{row}_{column}.jpg",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/d/1/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/d/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/d/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/d/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/l/0/{row}_{column}.jpg",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/l/1/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/l/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/l/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/l/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D82D9CCC_C4C5_701D_41E7_D6B9383D2AB9",
  "this.overlay_D9923192_C4C5_B005_41E0_08BFBA488F21",
  "this.overlay_D93819DB_C4CB_F03B_41C2_52B26135733A",
  "this.overlay_E13518BA_C4CA_B005_41E0_7D89AC4CCC69"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A8510386_A220_24E7_41C5_C72999B28587_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -75.67,
  "pitch": -1.47
 },
 "class": "PanoramaCamera",
 "id": "camera_E6A180A8_E804_2E3D_41D7_84F272D29445",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3432908_C4C7_7005_41E4_68FAA7254296"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF",
 "thumbnailUrl": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "13. Panvati 360 02 02",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E3C1AF43_C4CE_B00B_41E7_78820B061852",
  "this.overlay_E3FA8065_C4CA_B00F_41E4_081BC0C01BAF",
  "this.overlay_EC2852AA_C44B_7005_41CB_DF1A06917FD8"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 20.57,
  "pitch": 1.47
 },
 "class": "PanoramaCamera",
 "id": "camera_F8672EE3_E804_3233_41E4_03CECEE37927",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.76,
  "pitch": -5.88
 },
 "class": "PanoramaCamera",
 "id": "camera_E68FF089_E804_2EFC_41DB_7CBFDAEBDFB9",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F93F4F9F_E804_3214_41D5_54552380DBF6",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E654FCC0_E804_366D_41E1_9B6808165B93",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_camera",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85BA869_A220_642A_41A6_32FCBD974DCD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84C7191_A220_24FA_41E2_8125807332B8"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C",
 "thumbnailUrl": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 25",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_AC99E647_A260_EC3B_41BA_47339CF4726A",
  "this.overlay_AC895057_A260_24DC_41C3_059FAEEA9364",
  "this.overlay_CD0EAFB0_C0F8_3898_41A1_697BCE865217",
  "this.overlay_CD089D3A_C0F8_3995_41DB_CF6D89D6AA3A"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -38.2,
  "pitch": -0.73
 },
 "class": "PanoramaCamera",
 "id": "camera_E66EF03B_E804_2E1C_41E7_702B886F2D76",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8795465_A220_6C25_41D5_DBAD541AD55C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8A78F72_A220_1C3E_41CB_69834D123426"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9",
 "thumbnailUrl": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 04",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_AC94A021_A220_6409_41CC_6A982709BFCB",
  "this.overlay_AD722348_A221_E418_41D0_A8B117E10990",
  "this.overlay_CEE1F898_C0E8_781B_41E2_1790A2C30915"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC",
 "thumbnailUrl": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "10. Gopal 360 02",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/f/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/u/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/r/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/b/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/d/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/l/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D02F2827_C44E_F00B_41C6_1FF0FD06D53C"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E780AC35_E804_3614_41CF_6468CA371F4A",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC99220D_C44B_701F_41C2_E48577CC5377"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8510386_A220_24E7_41C5_C72999B28587"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3",
 "thumbnailUrl": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 10",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_ACD55C68_A260_1CE3_41E3_3B7F841291A1",
  "this.overlay_CED76F52_C0F9_F9A6_41DF_E69A80D5C7D5",
  "this.overlay_DC0F7AF0_C446_9005_4170_8DB253EB5092"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -16.9,
  "pitch": -3.67
 },
 "class": "PanoramaCamera",
 "id": "camera_E674904B_E804_2E7C_41E7_73240825F6D7",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8510386_A220_24E7_41C5_C72999B28587"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC99220D_C44B_701F_41C2_E48577CC5377"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_C9AB0616_C44B_700D_41E5_70875426881D",
 "thumbnailUrl": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "10. Gopal 360 01",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/f/0/{row}_{column}.jpg",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/f/1/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/f/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/f/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/f/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/u/0/{row}_{column}.jpg",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/u/1/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/u/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/u/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/u/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/r/0/{row}_{column}.jpg",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/r/1/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/r/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/r/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/r/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/b/0/{row}_{column}.jpg",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/b/1/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/b/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/b/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/b/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/d/0/{row}_{column}.jpg",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/d/1/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/d/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/d/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/d/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/l/0/{row}_{column}.jpg",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/l/1/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/l/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/l/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/l/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D21156D6_C447_900D_41E1_62F9BC7E3F63",
  "this.overlay_D34A20AF_C47D_901B_41C6_7C047E2AC6CF"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -77.14,
  "pitch": 0.73
 },
 "class": "PanoramaCamera",
 "id": "camera_E67D7CEF_E804_3633_41E5_0FC1D3222EA9",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 180,
  "pitch": -0.73
 },
 "class": "PanoramaCamera",
 "id": "camera_E7242BF7_E804_3214_41EC_54F542794A5F",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 180,
  "pitch": -8.08
 },
 "class": "PanoramaCamera",
 "id": "camera_E7911DF9_E804_361C_41E7_9A1FD0173967",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E63A2C82_E804_36EC_41BF_3B9AB493D9F6",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_camera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 65.39,
  "pitch": -5.88
 },
 "class": "PanoramaCamera",
 "id": "camera_E705ED7C_E804_3614_41D7_BDA0A58E924B",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E64C8CB1_E804_362C_41C2_EF6D66273CAA",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -17.63,
  "pitch": 3.67
 },
 "class": "PanoramaCamera",
 "id": "camera_E6D22D4D_E804_3674_41E5_79D22F6BDCD9",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E640EC92_E804_36EC_41DD_417CF98B4464",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E7FB6E57_E804_3214_41C9_752BE54FB4DD",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A85B6467_A220_EC25_41D5_724B2DE821B4",
 "thumbnailUrl": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 08",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_AC8B42BD_A26F_E465_41CF_C47B81F2CF14",
  "this.overlay_CD4287F9_C0E8_0845_41C1_A8A9F4409465"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 161.63,
  "pitch": -11.02
 },
 "class": "PanoramaCamera",
 "id": "camera_E7075116_E804_2E14_41E8_C16D759BB18E",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 135.92,
  "pitch": 4.41
 },
 "class": "PanoramaCamera",
 "id": "camera_E6921B2B_E804_3233_41D9_4FCF017077BB",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.84,
  "pitch": 11.76
 },
 "class": "PanoramaCamera",
 "id": "camera_E764E173_E804_2E13_41E5_15B99C8D50FD",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85B6467_A220_EC25_41D5_724B2DE821B4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67",
 "thumbnailUrl": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 09",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_ACC7D2A7_A260_2462_41A5_3BDF85B9A889",
  "this.overlay_CD379DAE_C0F8_18F4_41D2_E722A9EEFD2B"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38",
 "thumbnailUrl": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 19",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CF3006F2_C118_0B2B_41B3_28CAEF129723",
  "this.overlay_CE0A2007_C118_06EA_41D0_3C618EF0653A"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 38.2,
  "pitch": -0.73
 },
 "class": "PanoramaCamera",
 "id": "camera_E7D861D0_E804_2E6C_41EB_13B182F8DEE9",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E357DDAD_C44D_901F_41E3_4F08410EF208"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD",
 "thumbnailUrl": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "09. Kapaleshwar 360 05",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F4DB4FA5_C446_900F_41C6_EABB7B78783D",
  "this.overlay_F4AEB3A0_C446_9005_41E3_35869A653FE2",
  "this.overlay_F43971B1_C44A_B007_41AF_03C0D6508D70"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.84,
  "pitch": 4.41
 },
 "class": "PanoramaCamera",
 "id": "camera_E7AEFE18_E804_321D_419D_C6E468C5C254",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 167.51,
  "pitch": -4.41
 },
 "class": "PanoramaCamera",
 "id": "camera_E7AC81B1_E804_2E2C_41B9_04E9465E6F97",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 170.45,
  "pitch": -0.73
 },
 "class": "PanoramaCamera",
 "id": "camera_F8873F12_E804_33EC_419B_3F7DC25F406A",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E715BBE7_E804_3234_41DC_87AC5FDE326A",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 132,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 137.39,
  "pitch": 8.82
 },
 "class": "PanoramaCamera",
 "id": "camera_E678305A_E804_2E1D_41E2_229A6F2DA353",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -42.61,
  "pitch": -4.41
 },
 "class": "PanoramaCamera",
 "id": "camera_E6C8DD4D_E804_3674_41E9_2E7ED3B9FF9E",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E6739CE0_E804_362C_41DA_33120508DE37",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8",
 "thumbnailUrl": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "09. Kapaleshwar 360 02",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EE372F91_C44A_9007_41E3_36C73A3DDB61",
  "this.overlay_EF956B1D_C44B_F03F_41DE_B06B8433867E",
  "this.overlay_EFB10C20_C44A_B005_41DB_FBD73F9E117F",
  "this.overlay_E86064AE_C44A_901D_41E6_DFD3F50D4F66"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.73,
  "pitch": 13.96
 },
 "class": "PanoramaCamera",
 "id": "camera_E73ABDAB_E804_363C_41EB_08F7797E1B09",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3562B79_C44D_B007_41E4_DF55153B79CA"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB",
 "thumbnailUrl": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "09. Kapaleshwar 360 08",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F65C659A_C45B_B005_41E2_8E198722F233",
  "this.overlay_F7797B97_C45A_F00C_41B3_910A17D5515B",
  "this.overlay_F07E879D_C45F_903F_41C1_1324BC37B740"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -138.86,
  "pitch": 2.94
 },
 "class": "PanoramaCamera",
 "id": "camera_E6EA1BA8_E804_323D_41C3_986B20A04879",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -38.94,
  "pitch": -1.47
 },
 "class": "PanoramaCamera",
 "id": "camera_F9207F8F_E804_32F4_41D9_5088C2046126",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E790FC51_E804_366C_41D2_81C918E58CDF",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 35.27,
  "pitch": 2.2
 },
 "class": "PanoramaCamera",
 "id": "camera_E7427C06_E804_35F5_41A8_C8854FF21F57",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -60.24,
  "pitch": -0.73
 },
 "class": "PanoramaCamera",
 "id": "camera_F97E3FCE_E804_3274_41E6_8CDE45080A58",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -160.16,
  "pitch": -1.47
 },
 "class": "PanoramaCamera",
 "id": "camera_E7490154_E804_2E14_418D_5021FFA6C2B6",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 82.29,
  "pitch": 1.47
 },
 "class": "PanoramaCamera",
 "id": "camera_E733BBF7_E804_3214_41C9_999DE5C53F64",
 "manualRotationSpeed": 600
},
{
 "fontFamily": "Arial",
 "rollOverFontColor": "#FFFFFF",
 "selectedFontColor": "#FFFFFF",
 "children": [
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 01",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 03",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "class": "MenuItem",
   "label": "Outter part (3)",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 02",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 04",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 05",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 06",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 07",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 08",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 09",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 10",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 11",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 12",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 24",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 25",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 14",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 16",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 15",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 17",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 18",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 19",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 20",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 21",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 22",
   "click": "this.mainPlayList.set('selectedIndex', 23)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 23",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  },
  {
   "class": "MenuItem",
   "label": "06. Hatvati 360 26",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  },
  {
   "class": "MenuItem",
   "label": "10. Gopal 360 03",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  },
  {
   "class": "MenuItem",
   "label": "10. Gopal 360 06",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  },
  {
   "class": "MenuItem",
   "label": "10. Gopal 360 04",
   "click": "this.mainPlayList.set('selectedIndex', 28)"
  },
  {
   "class": "MenuItem",
   "label": "10. Gopal 360 05",
   "click": "this.mainPlayList.set('selectedIndex', 29)"
  },
  {
   "class": "MenuItem",
   "label": "10. Gopal 360 02",
   "click": "this.mainPlayList.set('selectedIndex', 30)"
  },
  {
   "class": "MenuItem",
   "label": "10. Gopal 360 01",
   "click": "this.mainPlayList.set('selectedIndex', 31)"
  },
  {
   "class": "MenuItem",
   "label": "12. Sundar 360 01 01",
   "click": "this.mainPlayList.set('selectedIndex', 32)"
  },
  {
   "class": "MenuItem",
   "label": "11. Sundar 360 07",
   "click": "this.mainPlayList.set('selectedIndex', 33)"
  },
  {
   "class": "MenuItem",
   "label": "Sundarache deul new 01 01",
   "click": "this.mainPlayList.set('selectedIndex', 34)"
  },
  {
   "class": "MenuItem",
   "label": "11. Sundar360 04",
   "click": "this.mainPlayList.set('selectedIndex', 35)"
  },
  {
   "class": "MenuItem",
   "label": "11. Sundar02",
   "click": "this.mainPlayList.set('selectedIndex', 36)"
  },
  {
   "class": "MenuItem",
   "label": "11. Sundar 360 06",
   "click": "this.mainPlayList.set('selectedIndex', 37)"
  },
  {
   "class": "MenuItem",
   "label": "11. Sundar360 05",
   "click": "this.mainPlayList.set('selectedIndex', 38)"
  },
  {
   "class": "MenuItem",
   "label": "Sundarache deul new 03 01",
   "click": "this.mainPlayList.set('selectedIndex', 39)"
  },
  {
   "class": "MenuItem",
   "label": "13. Panvati 360 01 01",
   "click": "this.mainPlayList.set('selectedIndex', 40)"
  },
  {
   "class": "MenuItem",
   "label": "13. Panvati 360 02 02",
   "click": "this.mainPlayList.set('selectedIndex', 41)"
  },
  {
   "class": "MenuItem",
   "label": "09. Kapaleshwar 360 01",
   "click": "this.mainPlayList.set('selectedIndex', 42)"
  },
  {
   "class": "MenuItem",
   "label": "09. Kapaleshwar 360 02",
   "click": "this.mainPlayList.set('selectedIndex', 43)"
  },
  {
   "class": "MenuItem",
   "label": "09. Kapaleshwar 360 09",
   "click": "this.mainPlayList.set('selectedIndex', 44)"
  },
  {
   "class": "MenuItem",
   "label": "09. Kapaleshwar 360 03",
   "click": "this.mainPlayList.set('selectedIndex', 45)"
  },
  {
   "class": "MenuItem",
   "label": "09. Kapaleshwar 360 04",
   "click": "this.mainPlayList.set('selectedIndex', 46)"
  },
  {
   "class": "MenuItem",
   "label": "09. Kapaleshwar 360 05",
   "click": "this.mainPlayList.set('selectedIndex', 47)"
  },
  {
   "class": "MenuItem",
   "label": "09. Kapaleshwar 360 06",
   "click": "this.mainPlayList.set('selectedIndex', 48)"
  },
  {
   "class": "MenuItem",
   "label": "09. Kapaleshwar 360 07",
   "click": "this.mainPlayList.set('selectedIndex', 49)"
  },
  {
   "class": "MenuItem",
   "label": "09. Kapaleshwar 360 08",
   "click": "this.mainPlayList.set('selectedIndex', 50)"
  },
  {
   "class": "MenuItem",
   "label": "09. Kapaleshwar 360 10",
   "click": "this.mainPlayList.set('selectedIndex', 51)"
  }
 ],
 "label": "Media",
 "id": "Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "backgroundColor": "#404040",
 "opacity": 0.4,
 "class": "Menu",
 "rollOverBackgroundColor": "#000000",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "fontColor": "#FFFFFF"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 113.14,
  "pitch": -13.22
 },
 "class": "PanoramaCamera",
 "id": "camera_E6855B1C_E804_3214_41E6_971F7F5F43AE",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -147.67,
  "pitch": 5.14
 },
 "class": "PanoramaCamera",
 "id": "camera_E65E5CD0_E804_366C_41E0_50E6E7A82323",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 132.98,
  "pitch": 13.22
 },
 "class": "PanoramaCamera",
 "id": "camera_E7110D8C_E804_36F4_41EC_F48B7E300D80",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C9AB0616_C44B_700D_41E5_70875426881D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8510386_A220_24E7_41C5_C72999B28587"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_DC99220D_C44B_701F_41C2_E48577CC5377",
 "thumbnailUrl": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "12. Sundar 360 01 01",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/f/0/{row}_{column}.jpg",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/f/1/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/f/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/f/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/f/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/u/0/{row}_{column}.jpg",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/u/1/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/u/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/u/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/u/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/r/0/{row}_{column}.jpg",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/r/1/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/r/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/r/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/r/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/b/0/{row}_{column}.jpg",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/b/1/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/b/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/b/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/b/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/d/0/{row}_{column}.jpg",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/d/1/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/d/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/d/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/d/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/l/0/{row}_{column}.jpg",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/l/1/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/l/2/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/l/3/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/l/4/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DC99720E_C44B_701D_41D1_6B3382397419",
  "this.overlay_DC98A20E_C44B_701D_41E6_EAF78FC6A8BC",
  "this.overlay_DDBAA4D9_C43F_B007_41CF_881F56CC5F2D"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 144.73,
  "pitch": -8.08
 },
 "class": "PanoramaCamera",
 "id": "camera_E6F94116_E804_2E14_41D5_75408328D714",
 "manualRotationSpeed": 600
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "06. Hatvati 360 26",
 "id": "panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227",
 "thumbnailUrl": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_t.jpg",
 "partial": false,
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "pitch": 0,
 "class": "Panorama"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3562B79_C44D_B007_41E4_DF55153B79CA"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD",
 "thumbnailUrl": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "09. Kapaleshwar 360 04",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EAF1FB57_C47F_B00B_41C9_5945DE7E5B83",
  "this.overlay_EA312B26_C445_700C_41E3_F970C768AFA5",
  "this.overlay_F1B3B2B2_C446_9005_41E6_A0D8A4B9E455"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -142.53,
  "pitch": -0.73
 },
 "class": "PanoramaCamera",
 "id": "camera_E7CE1E28_E804_323C_41E4_51B2885762E9",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_camera",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C9AB0616_C44B_700D_41E5_70875426881D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0",
 "thumbnailUrl": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "10. Gopal 360 04",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/f/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/u/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/r/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/b/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/d/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/l/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D6BDEED3_C447_700B_41A9_BFECE2403D7F",
  "this.overlay_D7C33690_C44A_B005_418A_797462D41155",
  "this.overlay_D1E644EA_C44A_9005_41C5_BAA003B3977A"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848",
   "camera": "this.panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF",
   "camera": "this.panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C",
   "camera": "this.panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A8795465_A220_6C25_41D5_DBAD541AD55C",
   "camera": "this.panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9",
   "camera": "this.panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73",
   "camera": "this.panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A8A78F72_A220_1C3E_41CB_69834D123426",
   "camera": "this.panorama_A8A78F72_A220_1C3E_41CB_69834D123426_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC",
   "camera": "this.panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A85B6467_A220_EC25_41D5_724B2DE821B4",
   "camera": "this.panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67",
   "camera": "this.panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3",
   "camera": "this.panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A8510386_A220_24E7_41C5_C72999B28587",
   "camera": "this.panorama_A8510386_A220_24E7_41C5_C72999B28587_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062",
   "camera": "this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A84C7191_A220_24FA_41E2_8125807332B8",
   "camera": "this.panorama_A84C7191_A220_24FA_41E2_8125807332B8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C",
   "camera": "this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A85BA869_A220_642A_41A6_32FCBD974DCD",
   "camera": "this.panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685",
   "camera": "this.panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A856030D_A220_65EA_41E3_78590B588A1B",
   "camera": "this.panorama_A856030D_A220_65EA_41E3_78590B588A1B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4",
   "camera": "this.panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE",
   "camera": "this.panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38",
   "camera": "this.panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE",
   "camera": "this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E",
   "camera": "this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A",
   "camera": "this.panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC",
   "camera": "this.panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227",
   "camera": "this.panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E",
   "camera": "this.panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D",
   "camera": "this.panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0",
   "camera": "this.panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1",
   "camera": "this.panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC",
   "camera": "this.panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_C9AB0616_C44B_700D_41E5_70875426881D",
   "camera": "this.panorama_C9AB0616_C44B_700D_41E5_70875426881D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DC99220D_C44B_701F_41C2_E48577CC5377",
   "camera": "this.panorama_DC99220D_C44B_701F_41C2_E48577CC5377_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5",
   "camera": "this.panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92",
   "camera": "this.panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF",
   "camera": "this.panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C",
   "camera": "this.panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D",
   "camera": "this.panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DCACD847_C447_F00C_41E0_44022FB89EEB",
   "camera": "this.panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C",
   "camera": "this.panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E3432908_C4C7_7005_41E4_68FAA7254296",
   "camera": "this.panorama_E3432908_C4C7_7005_41E4_68FAA7254296_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF",
   "camera": "this.panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5",
   "camera": "this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8",
   "camera": "this.panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA",
   "camera": "this.panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F",
   "camera": "this.panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD",
   "camera": "this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD",
   "camera": "this.panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E357DDAD_C44D_901F_41E3_4F08410EF208",
   "camera": "this.panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E3562B79_C44D_B007_41E4_DF55153B79CA",
   "camera": "this.panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB",
   "camera": "this.panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85B6467_A220_EC25_41D5_724B2DE821B4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A8A78F72_A220_1C3E_41CB_69834D123426",
 "thumbnailUrl": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 06",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_ACF8568F_A260_2C11_41CB_4D34BBB34A78",
  "this.overlay_AD729937_A260_6470_41DB_09096429053B",
  "this.overlay_CD345AFF_C0E8_3829_41A8_9330863D0B86"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F8F3DF60_E804_322D_419C_AF02B9A7F889",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.78,
  "pitch": -0.73
 },
 "class": "PanoramaCamera",
 "id": "camera_E6A10B3B_E804_321C_41E3_D150CB94B546",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 87.43,
  "pitch": -0.73
 },
 "class": "PanoramaCamera",
 "id": "camera_F8B4FF31_E804_322F_4191_B57FC751A885",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.16,
  "pitch": 2.2
 },
 "class": "PanoramaCamera",
 "id": "camera_E63E7ADD_E804_3217_41C9_F144559DBB80",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C",
 "thumbnailUrl": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "11. Sundar02",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E43E80AC_C4C6_901D_41A3_9F40C695477B",
  "this.overlay_E72FEA1B_C4C6_903B_41C1_53A334B2FAC6"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E692FD0F_E804_37F4_41B0_623554FA15D8",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3432908_C4C7_7005_41E4_68FAA7254296"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE",
 "thumbnailUrl": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 20",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CF64482F_C118_0723_41D9_E0FCB49B98EC",
  "this.overlay_E89713D8_C45D_7005_41E3_D574EB6F615D",
  "this.overlay_ED194C6F_C45B_901B_41D6_5234AD54984E"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C9AB0616_C44B_700D_41E5_70875426881D_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -166.04,
  "pitch": -2.2
 },
 "class": "PanoramaCamera",
 "id": "camera_E72FE144_E804_2E75_4193_9D6F3D1DA244",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A",
 "thumbnailUrl": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 22",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CF49F93E_C118_7909_41E7_A4D9DD104DF6"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D",
 "thumbnailUrl": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "10. Gopal 360 06",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 133,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/f/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/u/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/r/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/b/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/d/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/l/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D5805745_C45B_900F_41E4_7BE837AA9BFC",
  "this.overlay_D66C2E25_C445_900F_41C4_7656A17C1DA2"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -144,
  "pitch": 1.47
 },
 "class": "PanoramaCamera",
 "id": "camera_F80CBE66_E804_3235_41DD_25F09CFE7D16",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 144,
  "pitch": 0.73
 },
 "class": "PanoramaCamera",
 "id": "camera_F8A69F31_E804_322F_41E2_CF4975E8EDDE",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -157.22,
  "pitch": -1.47
 },
 "class": "PanoramaCamera",
 "id": "camera_E6DBDB89_E804_32FF_41A0_532D9025686C",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_camera",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85B6467_A220_EC25_41D5_724B2DE821B4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8A78F72_A220_1C3E_41CB_69834D123426"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC",
 "thumbnailUrl": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 07",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_ACD7AEA5_A260_1C13_41D1_8E24B0FE9E3A",
  "this.overlay_CD2EA7FD_C0E8_0835_41C1_F9DC60C3007D"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC99220D_C44B_701F_41C2_E48577CC5377"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5",
 "thumbnailUrl": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "11. Sundar 360 07",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DEA1EF99_C43B_B007_41C8_58FA667B76BA",
  "this.overlay_DF0052F0_C43A_B005_41E6_A58F6EDA6E13",
  "this.overlay_DEB6EC44_C43A_B00D_41D7_03B49498B8D4"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -33.8,
  "pitch": -6.61
 },
 "class": "PanoramaCamera",
 "id": "camera_E6CC40E7_E804_2E34_4191_135FC8BE2694",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C"
  }
 ],
 "hfov": 360,
 "label": "11. Sundar360 05",
 "id": "panorama_DCACD847_C447_F00C_41E0_44022FB89EEB",
 "thumbnailUrl": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 141,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E6B339EF_C4DA_901B_41BD_6783A0A4813F",
  "this.overlay_E183755A_C4DE_9005_41E1_5A2752FEF640"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.82,
  "pitch": 3.67
 },
 "class": "PanoramaCamera",
 "id": "camera_F8D3EF51_E804_326C_41E7_16373BE9F4FF",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 137.39,
  "pitch": 8.82
 },
 "class": "PanoramaCamera",
 "id": "camera_E6BCDD3D_E804_3617_41E4_AF0191027929",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 146.2,
  "pitch": 19.84
 },
 "class": "PanoramaCamera",
 "id": "camera_E6B2AD2E_E804_3634_41D6_B380675D5C5E",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC",
 "thumbnailUrl": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 23",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CF42A1F7_C118_091D_41DC_2AFD6DED4C0C"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.43,
  "pitch": 0.73
 },
 "class": "PanoramaCamera",
 "id": "camera_F96E5FCE_E804_3274_41E0_64F3268A09C7",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -166.04,
  "pitch": 5.88
 },
 "class": "PanoramaCamera",
 "id": "camera_E6352C72_E804_362D_41A2_A7DAB25F105C",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 166.78,
  "pitch": 4.41
 },
 "class": "PanoramaCamera",
 "id": "camera_E6C340D7_E804_2E13_41D2_D1C21C1291C1",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 10.29
 },
 "class": "PanoramaCamera",
 "id": "camera_F94F2FAE_E804_3235_4185_ABF5B75E7509",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -125.63,
  "pitch": 7.35
 },
 "class": "PanoramaCamera",
 "id": "camera_E781A183_E804_2EEC_41E5_A61223742DE6",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 166.04,
  "pitch": -18.37
 },
 "class": "PanoramaCamera",
 "id": "camera_E7836DE9_E804_363F_41EC_F6E7110A98D1",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E6A65D1E_E804_3615_41E8_DB4692E39136",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E68AE079_E804_2E1F_41D7_DF9B3C9F714B",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.24,
  "pitch": -1.47
 },
 "class": "PanoramaCamera",
 "id": "camera_E6E200F6_E804_2E15_41D9_B9D46F9EDB5C",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "yaw": 133.71,
  "pitch": 5.88
 },
 "class": "PanoramaCamera",
 "id": "camera_E7EDCE47_E804_3274_41E2_DEC14DDCA177",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -140.33,
  "pitch": 2.2
 },
 "class": "PanoramaCamera",
 "id": "camera_E707CBD7_E804_3213_41D4_F982CDE45273",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.65,
  "pitch": -4.41
 },
 "class": "PanoramaCamera",
 "id": "camera_E7153125_E804_2E37_41D7_1503D78FC0C1",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCACD847_C447_F00C_41E0_44022FB89EEB"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C",
 "thumbnailUrl": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "Sundarache deul new 03 01",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/f/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/u/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/r/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/b/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/d/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/l/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_E720C80D_C4DD_F01F_41DB_0234663FED69",
  "this.overlay_E090A5BA_C4DB_B005_41E0_D78008468D04"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E7B9F1B1_E804_2E2C_41DC_A115E569FB58",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 138.86,
  "pitch": 10.29
 },
 "class": "PanoramaCamera",
 "id": "camera_E6DEED5D_E804_3614_41E2_35457F3B5083",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84C7191_A220_24FA_41E2_8125807332B8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A85BA869_A220_642A_41A6_32FCBD974DCD",
 "thumbnailUrl": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 14",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CEB1158E_C0F8_0978_41E2_11FC0C90BBE4",
  "this.overlay_CE409298_C0F8_0B67_41E4_3B736B748EE8"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E",
 "thumbnailUrl": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 21",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CEB1D156_C0E8_093E_41D9_FC21DD3AEC5D",
  "this.overlay_CEAEA79D_C0E8_0937_41DF_46CAC7041674",
  "this.overlay_CF224B4F_C118_7902_41D2_E29C31393AD5",
  "this.overlay_EBEC2670_C118_0D86_41B3_22A5F4A72E5C"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5",
 "thumbnailUrl": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "09. Kapaleshwar 360 01",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EEB0A569_C445_F007_41D4_E8E21378AF93",
  "this.overlay_EE2FC00E_C446_F01D_41B5_7CB79979C8D2",
  "this.overlay_EF87B5DC_C44F_903D_41B6_14829B45EBEC"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84C7191_A220_24FA_41E2_8125807332B8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E",
 "thumbnailUrl": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "10. Gopal 360 03",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/f/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/u/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/r/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/b/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/d/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/l/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CBDEB306_C446_900D_41C4_D3D4FDF26E9E",
  "this.overlay_D4695117_C446_900B_41D6_F2A535964DB1",
  "this.overlay_CAA32943_C445_700B_41D7_E671B2ED72FF",
  "this.overlay_D51D41D9_C45E_9007_41E3_0C93D829869F"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_E357DDAD_C44D_901F_41E3_4F08410EF208",
 "thumbnailUrl": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "09. Kapaleshwar 360 06",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F5481C04_C44D_900D_41E0_661E3B547E8A",
  "this.overlay_F52EBD94_C44E_F00D_41A2_6E5E8CD042D8"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 138.86,
  "pitch": 10.29
 },
 "class": "PanoramaCamera",
 "id": "camera_E7715C35_E804_3614_41C8_450FDA4571E6",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.24,
  "pitch": 2.94
 },
 "class": "PanoramaCamera",
 "id": "camera_E69B3D0F_E804_37F4_41E1_482A06249381",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A856030D_A220_65EA_41E3_78590B588A1B"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4",
 "thumbnailUrl": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 17",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CEE12568_C0E8_09C2_41DC_B742C4CC1086",
  "this.overlay_CE30A5C9_C0E8_08C0_41D7_AFC0E4651042"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F81AEE76_E804_3214_41D0_65E03904AA81",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A84C7191_A220_24FA_41E2_8125807332B8_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -22.04,
  "pitch": -0.73
 },
 "class": "PanoramaCamera",
 "id": "camera_E6AFBB3B_E804_320C_41C0_B01A15EC78E1",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 69.06,
  "pitch": -3.67
 },
 "class": "PanoramaCamera",
 "id": "camera_E7215135_E804_2E14_41D0_842A9FD21666"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_camera",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871",
 "thumbnailUrl": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "09. Kapaleshwar 360 10",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F062D0F7_C45A_900C_41DC_4B9F1CF9317C"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.12,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E69CB099_E804_2E1C_41E5_78C8DD1CD0EE",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -71.27,
  "pitch": 3.67
 },
 "class": "PanoramaCamera",
 "id": "camera_E7665DCA_E804_367C_41CD_514F0C7E5E9C",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 138.12,
  "pitch": 7.35
 },
 "class": "PanoramaCamera",
 "id": "camera_E7572DCA_E804_367C_41D5_88F86D2232C6",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.29,
  "pitch": -0.73
 },
 "class": "PanoramaCamera",
 "id": "camera_F8E3EF60_E804_322D_41C1_330466DD1DFE",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.2,
  "pitch": 5.14
 },
 "class": "PanoramaCamera",
 "id": "camera_E7612C25_E804_3637_41DB_BE59A54D3A22",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.24,
  "pitch": 4.41
 },
 "class": "PanoramaCamera",
 "id": "camera_E6496ADD_E804_3217_41E8_1A641A66CEAE",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A8A78F72_A220_1C3E_41CB_69834D123426_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.71,
  "pitch": -17.63
 },
 "class": "PanoramaCamera",
 "id": "camera_E687FCFF_E804_3614_41D5_BE11887B7619",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 132,
  "class": "PanoramaCameraPosition",
  "yaw": -56.57,
  "pitch": 0.73
 },
 "class": "PanoramaCamera",
 "id": "camera_E66AAB0C_E804_33F5_41E2_3A22BB1D79AB",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 132,
  "class": "PanoramaCameraPosition",
  "yaw": -51.43,
  "pitch": 5.88
 },
 "class": "PanoramaCamera",
 "id": "camera_E7BEFE28_E804_323C_41DB_0C753CA2A567",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.45,
  "pitch": -1.47
 },
 "class": "PanoramaCamera",
 "id": "camera_F8499EC4_E804_3274_41BB_15CE40DF3C04",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 166.78,
  "pitch": 5.88
 },
 "class": "PanoramaCamera",
 "id": "camera_F99D2FED_E804_3234_41DA_099A9B6191CD",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E79DD1A7_E804_2E34_41E2_724DE446A818",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_E3432908_C4C7_7005_41E4_68FAA7254296_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A856030D_A220_65EA_41E3_78590B588A1B_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 146.2,
  "pitch": -4.41
 },
 "class": "PanoramaCamera",
 "id": "camera_E7C991C0_E804_2E6D_41DD_F4D8176DDD24",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8795465_A220_6C25_41D5_DBAD541AD55C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF",
 "thumbnailUrl": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 03",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_AFC8AC42_A220_1C7B_41B4_E0990CC150ED",
  "this.overlay_ACA4C9B1_A220_241F_41C7_FE1E46C2DC48"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 54.37,
  "pitch": -3.67
 },
 "class": "PanoramaCamera",
 "id": "camera_E7DC6E37_E804_3213_41A3_A25BF0BAB25E",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB"
  }
 ],
 "hfov": 360,
 "label": "09. Kapaleshwar 360 07",
 "id": "panorama_E3562B79_C44D_B007_41E4_DF55153B79CA",
 "thumbnailUrl": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 138,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F537F918_C44A_9005_41B7_6E3F2B921291",
  "this.overlay_F7092B3E_C446_907D_41B9_A459CDCF6DBF",
  "this.overlay_F0B14F38_C45A_F005_41AD_B4A0B6C7C59B"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1",
 "thumbnailUrl": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "10. Gopal 360 05",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/f/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/u/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/r/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/b/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/d/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/l/0/{row}_{column}.jpg",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D0643B88_C44E_B005_41E1_DECE37AA476E",
  "this.overlay_D295312D_C44A_B01F_41E1_4DD83188BFE6"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -38.2,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F8C45F41_E804_326C_41C7_60547799B9F2",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F9028F70_E804_322C_41DD_43FBAF18E74A",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -107.27,
  "pitch": 1.47
 },
 "class": "PanoramaCamera",
 "id": "camera_E668CCE0_E804_362C_41E5_46F5E732C84D"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E669602B_E804_2E33_41B0_C1EEE77C3DE1",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8795465_A220_6C25_41D5_DBAD541AD55C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C",
 "thumbnailUrl": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "Outter part (3)",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_AC4384C3_A220_6C00_41DB_3E09A6E23585",
  "this.overlay_B3A39E42_A220_3C06_41CF_4190B761A4B2",
  "this.overlay_CD144CAC_C0E8_3800_41E0_DF3B677736D2"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C9AB0616_C44B_700D_41E5_70875426881D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_A8510386_A220_24E7_41C5_C72999B28587",
 "thumbnailUrl": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "06. Hatvati 360 11",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_ACFE315F_A260_24D9_41E0_66969BE2098C",
  "this.overlay_CED9242C_C0F8_0FE8_41A3_0546CD86457A",
  "this.overlay_D2720191_C446_9007_41E1_0E2AF9024A15"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_DC99220D_C44B_701F_41C2_E48577CC5377_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.02,
  "pitch": 1.47
 },
 "class": "PanoramaCamera",
 "id": "camera_E6EEC106_E804_2FF4_41E3_29608F45B9C3",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_E6BEFB4B_E804_327C_41E9_9CBBE983BEC1",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_camera",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -81.55,
  "pitch": -1.47
 },
 "class": "PanoramaCamera",
 "id": "camera_E7745DDA_E804_361C_41DE_0B428C35DCD8",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -127.84,
  "pitch": -8.08
 },
 "class": "PanoramaCamera",
 "id": "camera_F82A0E95_E804_3217_41D2_1C4B91AA466A",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.71,
  "pitch": 5.14
 },
 "class": "PanoramaCamera",
 "id": "camera_F83A0EA5_E804_3234_41DA_26F0068B1037",
 "manualRotationSpeed": 600
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCACD847_C447_F00C_41E0_44022FB89EEB"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF",
 "thumbnailUrl": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "11. Sundar360 04",
 "cardboardMenu": "this.Menu_E61A6A9F_E804_3214_41AF_1E3BE631A79E",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/f/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/f/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/u/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/u/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/r/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/r/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/b/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/b/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/d/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/d/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/l/0/{row}_{column}.jpg",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/l/1/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DAFCAE2D_C4CE_901F_41E7_39E9FC44B010",
  "this.overlay_DBD08301_C4CA_9007_41A0_8F9A23FFC319",
  "this.overlay_E6F4FEA9_C4CA_9007_41D4_6FF4EEB047BC"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -159.43,
  "pitch": -5.14
 },
 "class": "PanoramaCamera",
 "id": "camera_E78F7193_E804_2EEC_41E3_607BD080D1ED",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.2,
  "pitch": -2.2
 },
 "class": "PanoramaCamera",
 "id": "camera_E6F89BB8_E804_321C_41C2_A2458A2D88F0",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 19.1,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_F859BED4_E804_3214_41E7_7C5A36E691BB",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 137.39,
  "pitch": 14.69
 },
 "class": "PanoramaCamera",
 "id": "camera_E683606A_E804_2E3C_41C3_7B4F44017056",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.73,
  "pitch": 5.14
 },
 "class": "PanoramaCamera",
 "id": "camera_E7557164_E804_2E34_41E9_3BF4B0F17C4A",
 "manualRotationSpeed": 600
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 141.06,
  "pitch": 9.55
 },
 "class": "PanoramaCamera",
 "id": "camera_E6E9FD6C_E804_3635_41CD_4A6230E4CC7B",
 "manualRotationSpeed": 600
},
{
 "progressBarBorderColor": "#000000",
 "data": {
  "name": "Main Viewer"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 50,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 100,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingTop": 4,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "playbackBarHeadHeight": 15
},
{
 "transparencyActive": false,
 "maxHeight": 70,
 "propagateClick": true,
 "id": "IconButton_C523D811_C8D2_B747_41E7_3DC61B534B76",
 "paddingRight": 0,
 "right": "3.23%",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 49.2,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_C523D811_C8D2_B747_41E7_3DC61B534B76.png",
 "bottom": "3.69%",
 "minWidth": 1,
 "mode": "push",
 "horizontalAlign": "center",
 "height": 49.2,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 70,
 "data": {
  "name": "IconButton12329"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C, this.camera_F82A0E95_E804_3217_41D2_1C4B91AA466A); this.mainPlayList.set('selectedIndex', 36)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.85,
   "image": "this.AnimatedImageResource_C78332CD_C8D5_D8DF_41E0_27687378A44B",
   "pitch": -25.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -48.96,
   "distance": 100
  }
 ],
 "id": "overlay_E55E26BC_C4DA_907C_41D2_90D8F317F5A5",
 "maps": [
  {
   "hfov": 10.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -48.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -25.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE, this.camera_E6AF10B8_E804_2E1C_41DF_E6BD19DF4520); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.54,
   "image": "this.AnimatedImageResource_C7BBF2CD_C8D5_D8DF_41C1_6549C81446C9",
   "pitch": -3.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -154.76,
   "distance": 100
  }
 ],
 "id": "overlay_E8ADB2D0_C445_9005_41E8_3A0488AF4E3F",
 "maps": [
  {
   "hfov": 5.54,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -3.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5, this.camera_E6B9F0C8_E804_2E7C_41E7_4934D9AF0D0D); this.mainPlayList.set('selectedIndex', 42)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.85,
   "image": "this.AnimatedImageResource_C7BB92CD_C8D5_D8DF_41D2_61975D82B431",
   "pitch": -12.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 84.27,
   "distance": 100
  }
 ],
 "id": "overlay_E8AA5378_C446_B005_41E1_2428FC0F19A3",
 "maps": [
  {
   "hfov": 10.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -12.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F, this.camera_E6A750B8_E804_2E1C_41E6_09F3F036EF61); this.mainPlayList.set('selectedIndex', 45)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 12.07,
   "image": "this.AnimatedImageResource_C7BAE2CD_C8D5_D8DF_419F_0AF07CA9848B",
   "pitch": -8.12,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -48.33,
   "distance": 100
  }
 ],
 "id": "overlay_E8146B4F_C447_901B_41E5_3902415A1980",
 "maps": [
  {
   "hfov": 12.07,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -48.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -8.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA, this.camera_E705ED7C_E804_3614_41D7_BDA0A58E924B); this.mainPlayList.set('selectedIndex', 44)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 14.51,
   "image": "this.AnimatedImageResource_C7BA62CD_C8D5_D8DF_41E1_E838C6A0C194",
   "pitch": -7.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -137.76,
   "distance": 100
  }
 ],
 "id": "overlay_E9F11374_C445_900D_41DA_3F9F013307A6",
 "maps": [
  {
   "hfov": 14.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -7.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD, this.camera_E7110D8C_E804_36F4_41EC_F48B7E300D80); this.mainPlayList.set('selectedIndex', 46)"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 14.18,
   "image": "this.AnimatedImageResource_C7B9E2CD_C8D5_D8DF_41E5_44DE9514215E",
   "pitch": -25.1,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 137.47,
   "distance": 100
  }
 ],
 "id": "overlay_E991177E_C47A_B0FD_41DF_9BB2C8998A95",
 "maps": [
  {
   "hfov": 14.18,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 137.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -25.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9, this.camera_E654FCC0_E804_366D_41E1_9B6808165B93); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.4,
   "image": "this.AnimatedImageResource_F16E8BB6_C118_1A71_41DA_B9CCA6E76E1E",
   "pitch": -7.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -144.56,
   "distance": 100
  }
 ],
 "id": "overlay_AC90E7D2_A220_2C04_41E4_04BEE931BA6D",
 "maps": [
  {
   "hfov": 8.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -7.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73, this.camera_E65E5CD0_E804_366C_41E0_50E6E7A82323); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 4.69,
   "image": "this.AnimatedImageResource_F16E4BB6_C118_1A71_41D7_311F231EB050",
   "pitch": -5.37,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -162.46,
   "distance": 100
  }
 ],
 "id": "overlay_B30ADB6F_A220_641B_41C5_E89BB69E8254",
 "maps": [
  {
   "hfov": 4.69,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -5.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C, this.camera_E668CCE0_E804_362C_41E5_46F5E732C84D); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.41,
   "image": "this.AnimatedImageResource_F16E1BB6_C118_1A71_41CE_98690E10222A",
   "pitch": -7.4,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 14.84,
   "distance": 100
  }
 ],
 "id": "overlay_CEB5EF44_C0E8_1872_41DF_0B844A722642",
 "maps": [
  {
   "hfov": 8.41,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -7.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4, this.camera_E6496ADD_E804_3217_41E8_1A641A66CEAE); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.55,
   "image": "this.AnimatedImageResource_F1771BC5_C118_1A13_41D4_36AC76C6D39D",
   "pitch": -6.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 165.33,
   "distance": 100
  }
 ],
 "id": "overlay_AC85CE97_A260_3C59_41E1_FC3DB9C8D8C0",
 "maps": [
  {
   "hfov": 11.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -6.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685, this.camera_E63E7ADD_E804_3217_41C9_F144559DBB80); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.21,
   "image": "this.AnimatedImageResource_F1748BC5_C118_1A13_41E4_F14748345E96",
   "pitch": -7.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 4.62,
   "distance": 100
  }
 ],
 "id": "overlay_CE8E36F1_C0E8_08B3_41B6_2563AEDCA45C",
 "maps": [
  {
   "hfov": 9.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -7.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C, this.camera_E7836DE9_E804_363F_41EC_F6E7110A98D1); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.64,
   "image": "this.AnimatedImageResource_F1683BB6_C118_1A71_41C8_44F9CF8405D7",
   "pitch": -24.52,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 116.49,
   "distance": 100
  }
 ],
 "id": "overlay_ACE08B53_A260_24D0_41C1_4E3538E014CB",
 "maps": [
  {
   "hfov": 9.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -24.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A85BA869_A220_642A_41A6_32FCBD974DCD, this.camera_E7665DCA_E804_367C_41CD_514F0C7E5E9C); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.5,
   "image": "this.AnimatedImageResource_F169DBB6_C118_1A71_41E2_BCE05DE50EDC",
   "pitch": -18.43,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 82,
   "distance": 100
  }
 ],
 "id": "overlay_B2437FE6_A26F_FBF0_41D8_1F20F2DC819B",
 "maps": [
  {
   "hfov": 7.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -18.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 4.77,
   "image": "this.AnimatedImageResource_F1696BB6_C118_1A71_41DA_A6622FB46816",
   "pitch": -7.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 147.42,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_ACFF7F24_A260_1C7C_41DF_316905D445A9",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 4.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 147.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -7.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062, this.camera_E7745DDA_E804_361C_41DE_0B428C35DCD8); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 4.81,
   "image": "this.AnimatedImageResource_C79862BE_C8D5_D8BC_41E6_56ABEC3F824C",
   "pitch": -3.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -65.63,
   "distance": 100
  }
 ],
 "id": "overlay_CEB73011_C0F8_0789_41DB_466C3D60AA8D",
 "maps": [
  {
   "hfov": 4.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -3.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E, this.camera_E7572DCA_E804_367C_41D5_88F86D2232C6); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 6.55,
   "image": "this.AnimatedImageResource_C79822BE_C8D5_D8BC_41DA_ACAFA17F8649",
   "pitch": -7.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -85.61,
   "distance": 100
  }
 ],
 "id": "overlay_CB5F2398_C445_B004_41AF_23E76E12DE9A",
 "maps": [
  {
   "hfov": 6.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -7.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A856030D_A220_65EA_41E3_78590B588A1B, this.camera_F99D2FED_E804_3234_41DA_099A9B6191CD); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.75,
   "image": "this.AnimatedImageResource_F1746BB6_C118_1A71_41E4_3862A6C71A11",
   "pitch": -7.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -162.77,
   "distance": 100
  }
 ],
 "id": "overlay_AC9F9A67_A260_E4FA_41D2_742A26A60218",
 "maps": [
  {
   "hfov": 13.75,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -7.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C, this.camera_F97E3FCE_E804_3274_41E6_8CDE45080A58); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.63,
   "image": "this.AnimatedImageResource_F177ABB6_C118_1A71_41CD_2B0AB77B1730",
   "pitch": -2.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 31.62,
   "distance": 100
  }
 ],
 "id": "overlay_CEF110BF_C0F8_08A0_41E0_0C5FACFC06E7",
 "maps": [
  {
   "hfov": 5.63,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -2.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84C7191_A220_24FA_41E2_8125807332B8, this.camera_F98DDFDD_E804_3217_41D6_EE0ED61994CD); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 3.11,
   "image": "this.AnimatedImageResource_F1775BB6_C118_1A71_41D5_F0D96D789E4C",
   "pitch": 0.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 30.41,
   "distance": 100
  }
 ],
 "id": "overlay_CD791981_C0F8_795A_41D3_7B2DA9FFF0DA",
 "maps": [
  {
   "hfov": 3.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": 0.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84C7191_A220_24FA_41E2_8125807332B8, this.camera_E6855B1C_E804_3214_41E6_971F7F5F43AE); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.49,
   "image": "this.AnimatedImageResource_F168EBB6_C118_1A71_41E7_0B149D86E451",
   "pitch": -6.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -170.17,
   "distance": 100
  }
 ],
 "id": "overlay_ACC7DEED_A260_3DF5_41DD_25D12172FE88",
 "maps": [
  {
   "hfov": 5.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -6.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8510386_A220_24E7_41C5_C72999B28587, this.camera_E6777B0C_E804_33F5_41EC_B868F5478DFC); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.5,
   "image": "this.AnimatedImageResource_F1687BB6_C118_1A71_41E2_3A856D273232",
   "pitch": -5.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -80.34,
   "distance": 100
  }
 ],
 "id": "overlay_CEE9BA1E_C0F8_7BB3_41C8_BB11368BCBB2",
 "maps": [
  {
   "hfov": 5.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -5.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E, this.camera_E6921B2B_E804_3233_41D9_4FCF017077BB); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.91,
   "image": "this.AnimatedImageResource_C799B2BE_C8D5_D8BC_41D8_93C096E560A1",
   "pitch": -5.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -157.62,
   "distance": 100
  }
 ],
 "id": "overlay_CA516157_C44A_900B_41CB_573EE4859FA1",
 "maps": [
  {
   "hfov": 5.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -5.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8A78F72_A220_1C3E_41CB_69834D123426, this.camera_E6F89BB8_E804_321C_41C2_A2458A2D88F0); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.33,
   "image": "this.AnimatedImageResource_F16CABB6_C118_1A71_417C_8F0F3BBD1E17",
   "pitch": -3.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -153.27,
   "distance": 100
  }
 ],
 "id": "overlay_ACA42ABC_A220_247B_41C7_2311F2FD4EB0",
 "maps": [
  {
   "hfov": 5.33,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -153.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -3.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9, this.camera_E6EA1BA8_E804_323D_41C3_986B20A04879); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.32,
   "image": "this.AnimatedImageResource_F16C7BB6_C118_1A71_41B4_45CAF725DD20",
   "pitch": -5.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 86.01,
   "distance": 100
  }
 ],
 "id": "overlay_CEF34270_C0E8_0823_41E3_2AC3850B0763",
 "maps": [
  {
   "hfov": 5.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -5.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 4.37,
   "image": "this.AnimatedImageResource_F16C3BB6_C118_1A71_41D1_FE20F36D023B",
   "pitch": -2.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 121.13,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_CF29F307_C0E8_09E2_41E2_3C45B4D81096",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 4.37,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 121.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -2.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 21.06,
   "image": "this.AnimatedImageResource_C78232CD_C8D5_D8DF_41BC_F5ACB65D5ED7",
   "pitch": 6.17,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -92.57,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_E8CC43F4_C4CA_B00D_41DC_2FFA880864F4",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "maps": [
  {
   "hfov": 21.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": 6.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF, this.camera_F9028F70_E804_322C_41DD_43FBAF18E74A); this.mainPlayList.set('selectedIndex', 41)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 19.19,
   "image": "this.AnimatedImageResource_C781C2CD_C8D5_D8DF_41CA_2E48968BBE16",
   "pitch": -9.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 141.97,
   "distance": 100
  }
 ],
 "id": "overlay_E2D29C6E_C4CE_F01D_41C7_08810A03E337",
 "maps": [
  {
   "hfov": 19.19,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -9.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5, this.camera_F912BF7F_E804_3213_41D3_53B9AFD5FEE1); this.mainPlayList.set('selectedIndex', 42)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.54,
   "image": "this.AnimatedImageResource_C78142CD_C8D5_D8DF_41E6_318B54809194",
   "pitch": -3.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 133.74,
   "distance": 100
  }
 ],
 "id": "overlay_EE60D717_C44E_900B_41D3_B8D0C2C58144",
 "maps": [
  {
   "hfov": 5.54,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -3.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF, this.camera_E68AE079_E804_2E1F_41D7_DF9B3C9F714B); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.97,
   "image": "this.AnimatedImageResource_E8814008_C168_0609_41CB_9DAFC98D5250",
   "pitch": -4.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 145.29,
   "distance": 100
  }
 ],
 "id": "overlay_E9D74FA1_C168_3A3A_41B2_ED6DF21B2A60",
 "maps": [
  {
   "hfov": 8.97,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 145.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -4.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4, this.camera_F8672EE3_E804_3233_41E4_03CECEE37927); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.92,
   "image": "this.AnimatedImageResource_F1757BC5_C118_1A13_41E8_2395589DA20B",
   "pitch": -2.9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 24.08,
   "distance": 100
  }
 ],
 "id": "overlay_CED9E572_C0E8_09D8_41D3_6E3D9A3FB0F3",
 "maps": [
  {
   "hfov": 8.92,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -2.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38, this.camera_F83A0EA5_E804_3234_41DA_26F0068B1037); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.92,
   "image": "this.AnimatedImageResource_F1751BC5_C118_1A13_41E2_9D30B91AFAB1",
   "pitch": -2.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 127.35,
   "distance": 100
  }
 ],
 "id": "overlay_CE6C8DB7_C0E8_1951_41CA_7370AF8574DF",
 "maps": [
  {
   "hfov": 8.92,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 127.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -2.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE, this.camera_F8499EC4_E804_3274_41BB_15CE40DF3C04); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.91,
   "image": "this.AnimatedImageResource_F172BBC5_C118_1A13_41E6_C5F5D1217962",
   "pitch": -3.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -105.1,
   "distance": 100
  }
 ],
 "id": "overlay_CEA988E7_C0E8_18E2_41E3_F5012BABA058",
 "maps": [
  {
   "hfov": 8.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -3.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E, this.camera_F859BED4_E804_3214_41E7_7C5A36E691BB); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.89,
   "image": "this.AnimatedImageResource_F1720BC5_C118_1A13_41CE_4046364E1E81",
   "pitch": -5.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -170.58,
   "distance": 100
  }
 ],
 "id": "overlay_CD936216_C0E8_0B27_41A9_5E9C66DBBF9E",
 "maps": [
  {
   "hfov": 8.89,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -5.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5, this.camera_E71FFD9B_E804_3613_417C_8118EDE04CA7); this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.75,
   "image": "this.AnimatedImageResource_C78FD2CD_C8D5_D8DF_41E2_85E68DFD7F1A",
   "pitch": -1.34,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 87.8,
   "distance": 100
  }
 ],
 "id": "overlay_D82D9CCC_C4C5_701D_41E7_D6B9383D2AB9",
 "maps": [
  {
   "hfov": 8.75,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -1.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C, this.camera_E72B4DAB_E804_363C_41EC_3A6FEB8BCEF4); this.mainPlayList.set('selectedIndex', 39)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.75,
   "image": "this.AnimatedImageResource_C78F22CD_C8D5_D8DF_41E7_9A7C11F16CF7",
   "pitch": -1.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 52.17,
   "distance": 100
  }
 ],
 "id": "overlay_D9923192_C4C5_B005_41E0_08BFBA488F21",
 "maps": [
  {
   "hfov": 8.75,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 52.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -1.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF, this.camera_E73ABDAB_E804_363C_41EB_08F7797E1B09); this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 12.51,
   "image": "this.AnimatedImageResource_C78ED2CD_C8D5_D8DF_41BA_59E194E4F3C5",
   "pitch": -7.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.16,
   "distance": 100
  }
 ],
 "id": "overlay_D93819DB_C4CB_F03B_41C2_52B26135733A",
 "maps": [
  {
   "hfov": 12.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -7.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3432908_C4C7_7005_41E4_68FAA7254296, this.camera_E7488DBA_E804_361D_41C2_2914FDAD898F); this.mainPlayList.set('selectedIndex', 40)"
  }
 ],
 "data": {
  "label": "Arrow 09a"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.03,
   "image": "this.AnimatedImageResource_C78E42CD_C8D5_D8DF_41C6_59B61E788FCD",
   "pitch": -11.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -128.4,
   "distance": 100
  }
 ],
 "id": "overlay_E13518BA_C4CA_B005_41E0_7D89AC4CCC69",
 "maps": [
  {
   "hfov": 9.03,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -128.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -11.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92, this.camera_E7557164_E804_2E34_41E9_3BF4B0F17C4A); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 6.88,
   "image": "this.AnimatedImageResource_C780F2CD_C8D5_D8DF_41DC_7F63A6E13BC6",
   "pitch": -0.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 37.64,
   "distance": 50
  }
 ],
 "id": "overlay_E3C1AF43_C4CE_B00B_41E7_78820B061852",
 "maps": [
  {
   "hfov": 6.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -0.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3432908_C4C7_7005_41E4_68FAA7254296, this.camera_E764E173_E804_2E13_41E5_15B99C8D50FD); this.mainPlayList.set('selectedIndex', 40)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02 Left"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.08,
   "image": "this.AnimatedImageResource_C78062CD_C8D5_D8DF_41E5_296D7F77381B",
   "pitch": -10.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 80.31,
   "distance": 50
  }
 ],
 "id": "overlay_E3FA8065_C4CA_B00F_41E4_081BC0C01BAF",
 "maps": [
  {
   "hfov": 7.08,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5, this.camera_E773A173_E804_2E13_41C6_3B3AA4F0FF86); this.mainPlayList.set('selectedIndex', 42)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.61,
   "image": "this.AnimatedImageResource_C787F2CD_C8D5_D8DF_41D1_EA45C9E3CD23",
   "pitch": -3.76,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -142.96,
   "distance": 100
  }
 ],
 "id": "overlay_EC2852AA_C44B_7005_41CB_DF1A06917FD8",
 "maps": [
  {
   "hfov": 7.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -142.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -3.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A85BA869_A220_642A_41A6_32FCBD974DCD, this.camera_E6952089_E804_2EFC_41E7_2527322251C3); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 6.85,
   "image": "this.AnimatedImageResource_F176CBB6_C118_1A71_41D5_A865016ECBFB",
   "pitch": -30.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 37.16,
   "distance": 100
  }
 ],
 "id": "overlay_AC99E647_A260_EC3B_41BA_47339CF4726A",
 "maps": [
  {
   "hfov": 6.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -30.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685, this.camera_E69CB099_E804_2E1C_41E5_78C8DD1CD0EE); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.15,
   "image": "this.AnimatedImageResource_F1767BB6_C118_1A71_41E3_EA30513AA445",
   "pitch": -10.52,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 157.74,
   "distance": 100
  }
 ],
 "id": "overlay_AC895057_A260_24DC_41C3_059FAEEA9364",
 "maps": [
  {
   "hfov": 7.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -10.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84C7191_A220_24FA_41E2_8125807332B8, this.camera_E6A180A8_E804_2E3D_41D7_84F272D29445); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.66,
   "image": "this.AnimatedImageResource_F1760BB6_C118_1A71_41D3_517088A9E937",
   "pitch": -16.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -53.47,
   "distance": 100
  }
 ],
 "id": "overlay_CD0EAFB0_C0F8_3898_41A1_697BCE865217",
 "maps": [
  {
   "hfov": 7.66,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -16.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062, this.camera_E68FF089_E804_2EFC_41DB_7CBFDAEBDFB9); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.06,
   "image": "this.AnimatedImageResource_F177ABB6_C118_1A71_41DD_B836614DC01B",
   "pitch": -2.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -63.32,
   "distance": 100
  }
 ],
 "id": "overlay_CD089D3A_C0F8_3995_41DB_CF6D89D6AA3A",
 "maps": [
  {
   "hfov": 5.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -2.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73, this.camera_F80CBE66_E804_3235_41DD_25F09CFE7D16); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.87,
   "image": "this.AnimatedImageResource_F16FBBB6_C118_1A71_41AA_B4689A1A502C",
   "pitch": -9.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 31.47,
   "distance": 100
  }
 ],
 "id": "overlay_AC94A021_A220_6409_41CC_6A982709BFCB",
 "maps": [
  {
   "hfov": 8.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -9.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8A78F72_A220_1C3E_41CB_69834D123426, this.camera_F81AEE76_E804_3214_41D0_65E03904AA81); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 4.66,
   "image": "this.AnimatedImageResource_F16F7BB6_C118_1A71_41D6_4CA05D437533",
   "pitch": -3.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 2.86,
   "distance": 100
  }
 ],
 "id": "overlay_AD722348_A221_E418_41D0_A8B117E10990",
 "maps": [
  {
   "hfov": 4.66,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -3.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8795465_A220_6C25_41D5_DBAD541AD55C, this.camera_E7FB6E57_E804_3214_41C9_752BE54FB4DD); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.92,
   "image": "this.AnimatedImageResource_F16F3BB6_C118_1A71_41D1_AA880DDD528E",
   "pitch": -7.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -86.23,
   "distance": 100
  }
 ],
 "id": "overlay_CEE1F898_C0E8_781B_41E2_1790A2C30915",
 "maps": [
  {
   "hfov": 8.92,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -7.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1, this.camera_E6739CE0_E804_362C_41DA_33120508DE37); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.96,
   "image": "this.AnimatedImageResource_C78BB2BE_C8D5_D8BC_41DD_D93E91C67FB8",
   "pitch": -25.12,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -49.05,
   "distance": 100
  }
 ],
 "id": "overlay_D02F2827_C44E_F00B_41C6_1FF0FD06D53C",
 "maps": [
  {
   "hfov": 9.96,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -49.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -25.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8510386_A220_24E7_41C5_C72999B28587, this.camera_E674904B_E804_2E7C_41E7_73240825F6D7); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.03,
   "image": "this.AnimatedImageResource_F16A4BB6_C118_1A71_41E0_1042A5A5566B",
   "pitch": -8.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -173.41,
   "distance": 100
  }
 ],
 "id": "overlay_ACD55C68_A260_1CE3_41E3_3B7F841291A1",
 "maps": [
  {
   "hfov": 11.03,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -8.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67, this.camera_E66EF03B_E804_2E1C_41E7_702B886F2D76); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.72,
   "image": "this.AnimatedImageResource_F16A1BB6_C118_1A71_41D5_89B73E25EF6E",
   "pitch": -2.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 46.52,
   "distance": 100
  }
 ],
 "id": "overlay_CED76F52_C0F9_F9A6_41DF_E69A80D5C7D5",
 "maps": [
  {
   "hfov": 7.72,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 46.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -2.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DC99220D_C44B_701F_41C2_E48577CC5377, this.camera_E669602B_E804_2E33_41B0_C1EEE77C3DE1); this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.36,
   "image": "this.AnimatedImageResource_C79BA2BE_C8D5_D8BC_41DD_06C1116B5E2B",
   "pitch": -8.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -128.01,
   "distance": 100
  }
 ],
 "id": "overlay_DC0F7AF0_C446_9005_4170_8DB253EB5092",
 "maps": [
  {
   "hfov": 5.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -128.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -8.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8510386_A220_24E7_41C5_C72999B28587, this.camera_F8E3EF60_E804_322D_41C1_330466DD1DFE); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.54,
   "image": "this.AnimatedImageResource_C78B52BE_C8D5_D8BC_41C2_31C985978060",
   "pitch": -5.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 85.61,
   "distance": 100
  }
 ],
 "id": "overlay_D21156D6_C447_900D_41E1_62F9BC7E3F63",
 "maps": [
  {
   "hfov": 7.54,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -5.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DC99220D_C44B_701F_41C2_E48577CC5377, this.camera_F8F3DF60_E804_322D_419C_AF02B9A7F889); this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.89,
   "image": "this.AnimatedImageResource_C78AF2BE_C8D5_D8BC_41D8_281A46B04E17",
   "pitch": -6.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -30.43,
   "distance": 100
  }
 ],
 "id": "overlay_D34A20AF_C47D_901B_41C6_7C047E2AC6CF",
 "maps": [
  {
   "hfov": 5.89,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -6.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67, this.camera_E78F7193_E804_2EEC_41E3_607BD080D1ED); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 6.4,
   "image": "this.AnimatedImageResource_F16DABB6_C118_1A71_41D5_94BF62A94BA9",
   "pitch": -6.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -175.91,
   "distance": 100
  }
 ],
 "id": "overlay_AC8B42BD_A26F_E465_41CF_C47B81F2CF14",
 "maps": [
  {
   "hfov": 6.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -6.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC, this.camera_E781A183_E804_2EEC_41E5_A61223742DE6); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 6.42,
   "image": "this.AnimatedImageResource_F16D6BB6_C118_1A71_41BF_04BA6D187904",
   "pitch": -4.43,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 33.99,
   "distance": 100
  }
 ],
 "id": "overlay_CD4287F9_C0E8_0845_41C1_A8A9F4409465",
 "maps": [
  {
   "hfov": 6.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -4.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3, this.camera_E6DBDB89_E804_32FF_41A0_532D9025686C); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.49,
   "image": "this.AnimatedImageResource_F16AEBB6_C118_1A71_41E4_571F4D6B76C4",
   "pitch": -12.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -166.51,
   "distance": 100
  }
 ],
 "id": "overlay_ACC7D2A7_A260_2462_41A5_3BDF85B9A889",
 "maps": [
  {
   "hfov": 10.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -12.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A85B6467_A220_EC25_41D5_724B2DE821B4, this.camera_E6CC9B6A_E804_323C_41EA_BF9C3C38BC24); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.2,
   "image": "this.AnimatedImageResource_F16ABBB6_C118_1A71_41E2_D9D83B0EFCD5",
   "pitch": -4.01,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -33.28,
   "distance": 100
  }
 ],
 "id": "overlay_CD379DAE_C0F8_18F4_41D2_E722A9EEFD2B",
 "maps": [
  {
   "hfov": 7.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -33.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -4.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC, this.camera_E7C991C0_E804_2E6D_41DD_F4D8176DDD24); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.98,
   "image": "this.AnimatedImageResource_F173ABC5_C118_1A13_41A8_8B9CD4D5CE08",
   "pitch": -4.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 147.87,
   "distance": 100
  }
 ],
 "id": "overlay_CF3006F2_C118_0B2B_41B3_28CAEF129723",
 "maps": [
  {
   "hfov": 7.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 147.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -4.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E, this.camera_E7D861D0_E804_2E6C_41EB_13B182F8DEE9); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.78,
   "image": "this.AnimatedImageResource_F1734BC5_C118_1A13_41D3_65D329E746B8",
   "pitch": -2.52,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -137.15,
   "distance": 100
  }
 ],
 "id": "overlay_CE0A2007_C118_06EA_41D0_3C618EF0653A",
 "maps": [
  {
   "hfov": 5.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -2.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E357DDAD_C44D_901F_41E3_4F08410EF208, this.camera_E67E605A_E804_2E1D_4191_544CCF430C4E); this.mainPlayList.set('selectedIndex', 48)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 14.38,
   "image": "this.AnimatedImageResource_C7BFD2CD_C8D5_D8DF_41C0_940723B8F78C",
   "pitch": -10.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 48.51,
   "distance": 100
  }
 ],
 "id": "overlay_F4DB4FA5_C446_900F_41C6_EABB7B78783D",
 "maps": [
  {
   "hfov": 14.38,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -10.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB, this.camera_E683606A_E804_2E3C_41C3_7B4F44017056); this.mainPlayList.set('selectedIndex', 50)"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 20.99,
   "image": "this.AnimatedImageResource_C7BF32CD_C8D5_D8DF_41B6_CAD2AB5E2CBD",
   "pitch": 3.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 152.43,
   "distance": 100
  }
 ],
 "id": "overlay_F4AEB3A0_C446_9005_41E3_35869A653FE2",
 "maps": [
  {
   "hfov": 20.99,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 152.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": 3.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD, this.camera_E678305A_E804_2E1D_41E2_229A6F2DA353); this.mainPlayList.set('selectedIndex', 46)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02 Left"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.88,
   "image": "this.AnimatedImageResource_C7BE82CD_C8D5_D8DF_41DD_2B6308224250",
   "pitch": 1.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -148.46,
   "distance": 50
  }
 ],
 "id": "overlay_F43971B1_C44A_B007_41AF_03C0D6508D70",
 "maps": [
  {
   "hfov": 9.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF, this.camera_F93F4F9F_E804_3214_41D5_54552380DBF6); this.mainPlayList.set('selectedIndex', 41)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.8,
   "image": "this.AnimatedImageResource_C785F2CD_C8D5_D8DF_41D3_5A05F18F7209",
   "pitch": -3.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -32.01,
   "distance": 100
  }
 ],
 "id": "overlay_EE372F91_C44A_9007_41E3_36C73A3DDB61",
 "maps": [
  {
   "hfov": 8.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -3.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5, this.camera_F94F2FAE_E804_3235_4185_ABF5B75E7509); this.mainPlayList.set('selectedIndex', 42)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.43,
   "image": "this.AnimatedImageResource_C78562CD_C8D5_D8DF_41A8_7514C0240782",
   "pitch": -19.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -50.6,
   "distance": 100
  }
 ],
 "id": "overlay_EF956B1D_C44B_F03F_41DE_B06B8433867E",
 "maps": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -19.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE, this.camera_F931AF8F_E804_32F4_41D5_E14E53679A28); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.55,
   "image": "this.AnimatedImageResource_C784F2CD_C8D5_D8DF_41C3_0B1DC6F62EBE",
   "pitch": -2.17,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 24.73,
   "distance": 100
  }
 ],
 "id": "overlay_EFB10C20_C44A_B005_41DB_FBD73F9E117F",
 "maps": [
  {
   "hfov": 5.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -2.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA, this.camera_F9207F8F_E804_32F4_41D9_5088C2046126); this.mainPlayList.set('selectedIndex', 44)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 14.54,
   "image": "this.AnimatedImageResource_C78462CD_C8D5_D8DF_41E2_783930EEE0F4",
   "pitch": -6.69,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 49.63,
   "distance": 100
  }
 ],
 "id": "overlay_E86064AE_C44A_901D_41E6_DFD3F50D4F66",
 "maps": [
  {
   "hfov": 14.54,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -6.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871, this.camera_E7E651E0_E804_2E2C_41DC_459724774E1A); this.mainPlayList.set('selectedIndex', 51)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.71,
   "image": "this.AnimatedImageResource_C7BCF2DD_C8D5_D8FC_41E2_5F7A30EB7996",
   "pitch": -13.47,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 162.65,
   "distance": 100
  }
 ],
 "id": "overlay_F65C659A_C45B_B005_41E2_8E198722F233",
 "maps": [
  {
   "hfov": 7.71,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 162.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -13.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3562B79_C44D_B007_41E4_DF55153B79CA, this.camera_F805F1FF_E804_2E14_41E7_7268F287C88F); this.mainPlayList.set('selectedIndex', 49)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.62,
   "image": "this.AnimatedImageResource_C7BC42DD_C8D5_D8FC_41CA_5C0F975A9EF4",
   "pitch": -20.01,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 88.57,
   "distance": 100
  }
 ],
 "id": "overlay_F7797B97_C45A_F00C_41B3_910A17D5515B",
 "maps": [
  {
   "hfov": 11.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -20.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD, this.camera_E7F791EF_E804_2E33_41DF_0B889A906C79); this.mainPlayList.set('selectedIndex', 47)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 14.76,
   "image": "this.AnimatedImageResource_C7B3A2DD_C8D5_D8FC_41DE_ABCAC90C040E",
   "pitch": -26.04,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -41.78,
   "distance": 100
  }
 ],
 "id": "overlay_F07E879D_C45F_903F_41C1_1324BC37B740",
 "maps": [
  {
   "hfov": 14.76,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -26.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8510386_A220_24E7_41C5_C72999B28587, this.camera_E6BEFB4B_E804_327C_41E9_9CBBE983BEC1); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.66,
   "image": "this.AnimatedImageResource_C78A42BE_C8D5_D8BC_41E2_E4B9B1C41F56",
   "pitch": -1.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 83.66,
   "distance": 100
  }
 ],
 "id": "overlay_DC99720E_C44B_701D_41D1_6B3382397419",
 "maps": [
  {
   "hfov": 5.66,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -1.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C9AB0616_C44B_700D_41E5_70875426881D, this.camera_E6A10B3B_E804_321C_41E3_D150CB94B546); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.66,
   "image": "this.AnimatedImageResource_C78A12BE_C8D5_D8BC_41D1_17C9A1D0875D",
   "pitch": -2.57,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 130,
   "distance": 100
  }
 ],
 "id": "overlay_DC98A20E_C44B_701D_41E6_EAF78FC6A8BC",
 "maps": [
  {
   "hfov": 5.66,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 130,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -2.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5, this.camera_E6AFBB3B_E804_320C_41C0_B01A15EC78E1); this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 4.44,
   "image": "this.AnimatedImageResource_C78982BE_C8D5_D8BC_41DB_02D1B918DF94",
   "pitch": -4.58,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -41.34,
   "distance": 100
  }
 ],
 "id": "overlay_DDBAA4D9_C43F_B007_41CF_881F56CC5F2D",
 "maps": [
  {
   "hfov": 4.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -4.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD, this.camera_E7DC6E37_E804_3213_41A3_A25BF0BAB25E); this.mainPlayList.set('selectedIndex', 47)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.86,
   "image": "this.AnimatedImageResource_C7B972CD_C8D5_D8DF_41DF_D6DE8639C9C8",
   "pitch": -8.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 81.31,
   "distance": 100
  }
 ],
 "id": "overlay_EAF1FB57_C47F_B00B_41C9_5945DE7E5B83",
 "maps": [
  {
   "hfov": 9.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -8.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3562B79_C44D_B007_41E4_DF55153B79CA, this.camera_E7EDCE47_E804_3274_41E2_DEC14DDCA177); this.mainPlayList.set('selectedIndex', 49)"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 3.74,
   "image": "this.AnimatedImageResource_C7B8D2CD_C8D5_D8DF_41E5_CAC687F4681C",
   "pitch": 12.6,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 137.63,
   "distance": 100
  }
 ],
 "id": "overlay_EA312B26_C445_700C_41E3_F970C768AFA5",
 "maps": [
  {
   "hfov": 3.74,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 137.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 12.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F, this.camera_E7CE1E28_E804_323C_41E4_51B2885762E9); this.mainPlayList.set('selectedIndex', 45)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.81,
   "image": "this.AnimatedImageResource_C7B842CD_C8D5_D8DF_41D7_375D094B5E43",
   "pitch": -14.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -44.22,
   "distance": 100
  }
 ],
 "id": "overlay_F1B3B2B2_C446_9005_41E6_A0D8A4B9E455",
 "maps": [
  {
   "hfov": 11.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -14.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D, this.camera_F8C45F41_E804_326C_41C7_60547799B9F2); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.97,
   "image": "this.AnimatedImageResource_C79442BE_C8D5_D8BC_418C_6C3A4346CA37",
   "pitch": -12.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 97.5,
   "distance": 100
  }
 ],
 "id": "overlay_D6BDEED3_C447_700B_41A9_BFECE2403D7F",
 "maps": [
  {
   "hfov": 8.97,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -12.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1, this.camera_F8D3EF51_E804_326C_41E7_16373BE9F4FF); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.06,
   "image": "this.AnimatedImageResource_C78BC2BE_C8D5_D8BC_41D0_CCC207FBBFFC",
   "pitch": -18.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 139.7,
   "distance": 100
  }
 ],
 "id": "overlay_D7C33690_C44A_B005_418A_797462D41155",
 "maps": [
  {
   "hfov": 16.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 139.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -18.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C9AB0616_C44B_700D_41E5_70875426881D, this.camera_F8B4FF31_E804_322F_4191_B57FC751A885); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 17.04,
   "image": "this.AnimatedImageResource_C78B62BE_C8D5_D8BC_41E1_40A444E2FA52",
   "pitch": -24.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -31.83,
   "distance": 100
  }
 ],
 "id": "overlay_D1E644EA_C44A_9005_41C5_BAA003B3977A",
 "maps": [
  {
   "hfov": 17.04,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -31.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -24.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC, this.camera_E715BBE7_E804_3234_41DC_87AC5FDE326A); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.89,
   "image": "this.AnimatedImageResource_F16DDBB6_C118_1A71_41C9_25C79394BF63",
   "pitch": -8.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.28,
   "distance": 100
  }
 ],
 "id": "overlay_ACF8568F_A260_2C11_41CB_4D34BBB34A78",
 "maps": [
  {
   "hfov": 8.89,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -8.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A85B6467_A220_EC25_41D5_724B2DE821B4, this.camera_E7242BF7_E804_3214_41EC_54F542794A5F); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 4.68,
   "image": "this.AnimatedImageResource_F16F1BB6_C118_1A71_41E7_1733A198E071",
   "pitch": -6.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.97,
   "distance": 100
  }
 ],
 "id": "overlay_AD729937_A260_6470_41DB_09096429053B",
 "maps": [
  {
   "hfov": 4.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -6.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73, this.camera_E733BBF7_E804_3214_41C9_999DE5C53F64); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 6.92,
   "image": "this.AnimatedImageResource_F16CDBB6_C118_1A71_41E2_5C1006B51079",
   "pitch": -5.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 173.45,
   "distance": 100
  }
 ],
 "id": "overlay_CD345AFF_C0E8_3829_41A8_9330863D0B86",
 "maps": [
  {
   "hfov": 6.92,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -5.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D, this.camera_E790FC51_E804_366C_41D2_81C918E58CDF); this.mainPlayList.set('selectedIndex', 37)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 19.67,
   "image": "this.AnimatedImageResource_C78C42CD_C8D5_D8DF_41D1_259A7B85C0E5",
   "pitch": -26.34,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 58.3,
   "distance": 100
  }
 ],
 "id": "overlay_E43E80AC_C4C6_901D_41A3_9F40C695477B",
 "maps": [
  {
   "hfov": 19.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 58.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -26.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF, this.camera_E780AC35_E804_3614_41CF_6468CA371F4A); this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 24.7,
   "image": "this.AnimatedImageResource_C783A2CD_C8D5_D8DF_41D9_8C87A1458BAA",
   "pitch": -44.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -117.93,
   "distance": 50
  }
 ],
 "id": "overlay_E72FEA1B_C4C6_903B_41C1_53A334B2FAC6",
 "maps": [
  {
   "hfov": 24.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -117.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -44.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E, this.camera_E7427C06_E804_35F5_41A8_C8854FF21F57); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 4.07,
   "image": "this.AnimatedImageResource_F170FBC5_C118_1A13_41B4_C1421425162C",
   "pitch": -0.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 158.58,
   "distance": 100
  }
 ],
 "id": "overlay_CF64482F_C118_0723_41D9_E0FCB49B98EC",
 "maps": [
  {
   "hfov": 4.07,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -0.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5, this.camera_E7612C25_E804_3637_41DB_BE59A54D3A22); this.mainPlayList.set('selectedIndex', 42)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.55,
   "image": "this.AnimatedImageResource_C791D2BE_C8D5_D8BC_41E0_C93F93EA102E",
   "pitch": -1.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 44.09,
   "distance": 100
  }
 ],
 "id": "overlay_E89713D8_C45D_7005_41E3_D574EB6F615D",
 "maps": [
  {
   "hfov": 5.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -1.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3432908_C4C7_7005_41E4_68FAA7254296, this.camera_E7526C16_E804_3614_41CE_CE1B9A7C47ED); this.mainPlayList.set('selectedIndex', 40)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 4.46,
   "image": "this.AnimatedImageResource_C79152BE_C8D5_D8BC_41D5_0D9AB2DEEE32",
   "pitch": 0.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 80.59,
   "distance": 100
  }
 ],
 "id": "overlay_ED194C6F_C45B_901B_41D6_5234AD54984E",
 "maps": [
  {
   "hfov": 4.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": 0.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E, this.camera_E6C340D7_E804_2E13_41D2_D1C21C1291C1); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.28,
   "image": "this.AnimatedImageResource_F1712BC5_C118_1A13_41D4_2641AD5A9841",
   "pitch": -2.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -5.49,
   "distance": 100
  }
 ],
 "id": "overlay_CF49F93E_C118_7909_41E7_A4D9DD104DF6",
 "maps": [
  {
   "hfov": 9.28,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -2.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0, this.camera_E6E9FD6C_E804_3635_41CD_4A6230E4CC7B); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.63,
   "image": "this.AnimatedImageResource_C79522BE_C8D5_D8BC_41DC_2180002C36E3",
   "pitch": -12.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -171.15,
   "distance": 100
  }
 ],
 "id": "overlay_D5805745_C45B_900F_41E4_7BE837AA9BFC",
 "maps": [
  {
   "hfov": 8.63,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -12.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E, this.camera_E6F7DD7C_E804_3614_41EA_CE6565940A16); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.09,
   "image": "this.AnimatedImageResource_C794D2BE_C8D5_D8BC_4199_61C96BA37B9C",
   "pitch": -36.6,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -42.67,
   "distance": 100
  }
 ],
 "id": "overlay_D66C2E25_C445_900F_41C4_7656A17C1DA2",
 "maps": [
  {
   "hfov": 13.09,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -42.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -36.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A85B6467_A220_EC25_41D5_724B2DE821B4, this.camera_E7911DF9_E804_361C_41E7_9A1FD0173967); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.25,
   "image": "this.AnimatedImageResource_F16C7BB6_C118_1A71_416D_27D0E1868284",
   "pitch": -12.34,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 14.92,
   "distance": 100
  }
 ],
 "id": "overlay_ACD7AEA5_A260_1C13_41D1_8E24B0FE9E3A",
 "maps": [
  {
   "hfov": 11.25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -12.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8A78F72_A220_1C3E_41CB_69834D123426, this.camera_E7A05E09_E804_35FC_41DB_A78176B994A2); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.23,
   "image": "this.AnimatedImageResource_F16C0BB6_C118_1A71_41C5_9AB01F86C368",
   "pitch": -2.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -126.92,
   "distance": 100
  }
 ],
 "id": "overlay_CD2EA7FD_C0E8_0835_41C1_F9DC60C3007D",
 "maps": [
  {
   "hfov": 8.23,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -126.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -2.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92, this.camera_E6459CA1_E804_362F_41EC_BB08DDDD9FD1); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.19,
   "image": "this.AnimatedImageResource_C78932BE_C8D5_D8BC_41E5_2CC968B89919",
   "pitch": -12.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -77.93,
   "distance": 100
  }
 ],
 "id": "overlay_DEA1EF99_C43B_B007_41C8_58FA667B76BA",
 "maps": [
  {
   "hfov": 16.19,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -77.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -12.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C, this.camera_E64C8CB1_E804_362C_41C2_EF6D66273CAA); this.mainPlayList.set('selectedIndex', 39)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.05,
   "image": "this.AnimatedImageResource_C78882BE_C8D5_D8BC_41E7_5D172863477A",
   "pitch": -5.65,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 9.33,
   "distance": 100
  }
 ],
 "id": "overlay_DF0052F0_C43A_B005_41E6_A58F6EDA6E13",
 "maps": [
  {
   "hfov": 13.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -5.65
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DC99220D_C44B_701F_41C2_E48577CC5377, this.camera_E640EC92_E804_36EC_41DD_417CF98B4464); this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.88,
   "image": "this.AnimatedImageResource_C78832CD_C8D5_D8DF_41D5_003D0BD41FB5",
   "pitch": -2.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 99.64,
   "distance": 100
  }
 ],
 "id": "overlay_DEB6EC44_C43A_B00D_41D7_03B49498B8D4",
 "maps": [
  {
   "hfov": 8.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -2.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF, this.camera_F960AFBE_E804_3214_41E1_CD1C1283C203); this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.15,
   "image": "this.AnimatedImageResource_C782D2CD_C8D5_D8DF_41E4_245AC7EF40B8",
   "pitch": -11.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -56.71,
   "distance": 100
  }
 ],
 "id": "overlay_E6B339EF_C4DA_901B_41BD_6783A0A4813F",
 "maps": [
  {
   "hfov": 10.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -11.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C, this.camera_F96E5FCE_E804_3274_41E0_64F3268A09C7); this.mainPlayList.set('selectedIndex', 39)"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 19.93,
   "image": "this.AnimatedImageResource_C78222CD_C8D5_D8DF_41D9_2947E0C43393",
   "pitch": -29.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -167.63,
   "distance": 50
  }
 ],
 "id": "overlay_E183755A_C4DE_9005_41E1_5A2752FEF640",
 "maps": [
  {
   "hfov": 19.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -29.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38, this.camera_E707CBD7_E804_3213_41D4_F982CDE45273); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.52,
   "image": "this.AnimatedImageResource_F17ECBC5_C118_1A13_41B9_D50EF0709E05",
   "pitch": -3.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 160.47,
   "distance": 100
  }
 ],
 "id": "overlay_CF42A1F7_C118_091D_41DC_2AFD6DED4C0C",
 "maps": [
  {
   "hfov": 16.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -3.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5, this.camera_E7AEFE18_E804_321D_419D_C6E468C5C254); this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.55,
   "image": "this.AnimatedImageResource_C78182CD_C8D5_D8DF_41E1_F92EAED610C1",
   "pitch": -5.38,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -88.91,
   "distance": 100
  }
 ],
 "id": "overlay_E720C80D_C4DD_F01F_41DB_0234663FED69",
 "maps": [
  {
   "hfov": 9.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -5.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DCACD847_C447_F00C_41E0_44022FB89EEB, this.camera_E7BEFE28_E804_323C_41DB_0C753CA2A567); this.mainPlayList.set('selectedIndex', 38)"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 19.61,
   "image": "this.AnimatedImageResource_C78102CD_C8D5_D8DF_41CA_8014AA2D2D7D",
   "pitch": -17.76,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 2.55,
   "distance": 100
  }
 ],
 "id": "overlay_E090A5BA_C4DB_B005_41E0_D78008468D04",
 "maps": [
  {
   "hfov": 19.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -17.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84C7191_A220_24FA_41E2_8125807332B8, this.camera_E67D7CEF_E804_3633_41E5_0FC1D3222EA9); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.44,
   "image": "this.AnimatedImageResource_F1776BB6_C118_1A71_41CA_014FFED9ABDC",
   "pitch": 1.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -76.6,
   "distance": 100
  }
 ],
 "id": "overlay_CEB1158E_C0F8_0978_41E2_11FC0C90BBE4",
 "maps": [
  {
   "hfov": 8.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": 1.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C, this.camera_E687FCFF_E804_3614_41D5_BE11887B7619); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.27,
   "image": "this.AnimatedImageResource_F174FBB6_C118_1A71_41D9_381037803008",
   "pitch": -4.57,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -119.59,
   "distance": 100
  }
 ],
 "id": "overlay_CE409298_C0F8_0B67_41E4_3B736B748EE8",
 "maps": [
  {
   "hfov": 7.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -119.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -4.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38, this.camera_F8873F12_E804_33EC_419B_3F7DC25F406A); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.33,
   "image": "this.AnimatedImageResource_F1709BC5_C118_1A13_41D6_A0B219941888",
   "pitch": -2.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -96.3,
   "distance": 100
  }
 ],
 "id": "overlay_CEB1D156_C0E8_093E_41D9_FC21DD3AEC5D",
 "maps": [
  {
   "hfov": 11.33,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -2.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE, this.camera_F8956F22_E804_322C_41E2_1B95DEF1DF5F); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 6.61,
   "image": "this.AnimatedImageResource_F1703BC5_C118_1A13_41E5_21F037C3CED5",
   "pitch": -2.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 104.26,
   "distance": 100
  }
 ],
 "id": "overlay_CEAEA79D_C0E8_0937_41DF_46CAC7041674",
 "maps": [
  {
   "hfov": 6.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -2.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A, this.camera_F8A69F31_E804_322F_41E2_CF4975E8EDDE); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 6.59,
   "image": "this.AnimatedImageResource_F171ABC5_C118_1A13_41E5_E6BBD414F54E",
   "pitch": -4.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 35.02,
   "distance": 100
  }
 ],
 "id": "overlay_CF224B4F_C118_7902_41D2_E29C31393AD5",
 "maps": [
  {
   "hfov": 6.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -4.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE, this.camera_F877EF03_E804_33EC_41D2_28350D0C4049); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 6.61,
   "image": "this.AnimatedImageResource_EB36449A_C118_0E85_41CB_963E3C405596",
   "pitch": -2.13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 174.26,
   "distance": 100
  }
 ],
 "id": "overlay_EBEC2670_C118_0D86_41B3_22A5F4A72E5C",
 "maps": [
  {
   "hfov": 6.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -2.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE, this.camera_E69B3D0F_E804_37F4_41E1_482A06249381); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.55,
   "image": "this.AnimatedImageResource_C78742CD_C8D5_D8DF_41D9_07D9286737D6",
   "pitch": -1.47,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -75.84,
   "distance": 100
  }
 ],
 "id": "overlay_EEB0A569_C445_F007_41D4_E8E21378AF93",
 "maps": [
  {
   "hfov": 5.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -1.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF, this.camera_E6A65D1E_E804_3615_41E8_DB4692E39136); this.mainPlayList.set('selectedIndex', 41)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.94,
   "image": "this.AnimatedImageResource_C786E2CD_C8D5_D8DF_41D3_49D54894B048",
   "pitch": -1.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -126.82,
   "distance": 100
  }
 ],
 "id": "overlay_EE2FC00E_C446_F01D_41B5_7CB79979C8D2",
 "maps": [
  {
   "hfov": 7.94,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -126.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -1.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8, this.camera_E692FD0F_E804_37F4_41B0_623554FA15D8); this.mainPlayList.set('selectedIndex', 43)"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 4.31,
   "image": "this.AnimatedImageResource_C78642CD_C8D5_D8DF_41DA_1254C17AAFA1",
   "pitch": 3.12,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -9.01,
   "distance": 100
  }
 ],
 "id": "overlay_EF87B5DC_C44F_903D_41B6_14829B45EBEC",
 "maps": [
  {
   "hfov": 4.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": 3.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062, this.camera_E6EEC106_E804_2FF4_41E3_29608F45B9C3); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.2,
   "image": "this.AnimatedImageResource_C796F2BE_C8D5_D8BC_41B1_71529968B5DB",
   "pitch": -1.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -87.94,
   "distance": 100
  }
 ],
 "id": "overlay_CBDEB306_C446_900D_41C4_D3D4FDF26E9E",
 "maps": [
  {
   "hfov": 9.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -1.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84C7191_A220_24FA_41E2_8125807332B8, this.camera_E6F94116_E804_2E14_41D5_75408328D714); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.03,
   "image": "this.AnimatedImageResource_C79692BE_C8D5_D8BC_41DF_FA81CC66826A",
   "pitch": -11.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 17.67,
   "distance": 100
  }
 ],
 "id": "overlay_D4695117_C446_900B_41D6_F2A535964DB1",
 "maps": [
  {
   "hfov": 9.03,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -11.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C, this.camera_E7075116_E804_2E14_41E8_C16D759BB18E); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 4.77,
   "image": "this.AnimatedImageResource_C79632BE_C8D5_D8BC_41DC_4C6F7F18699E",
   "pitch": -11.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 53.14,
   "distance": 100
  }
 ],
 "id": "overlay_CAA32943_C445_700B_41D7_E671B2ED72FF",
 "maps": [
  {
   "hfov": 4.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 53.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -11.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D, this.camera_E6E200F6_E804_2E15_41D9_B9D46F9EDB5C); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.2,
   "image": "this.AnimatedImageResource_C795D2BE_C8D5_D8BC_41E4_56CFD08C4590",
   "pitch": -19.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 139,
   "distance": 100
  }
 ],
 "id": "overlay_D51D41D9_C45E_9007_41E3_0C93D829869F",
 "maps": [
  {
   "hfov": 11.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 139,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -19.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD, this.camera_E6B2AD2E_E804_3634_41D6_B380675D5C5E); this.mainPlayList.set('selectedIndex', 47)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.89,
   "image": "this.AnimatedImageResource_C7BE12CD_C8D5_D8DF_41E0_1EB7A448E0F6",
   "pitch": -7.24,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 43.17,
   "distance": 100
  }
 ],
 "id": "overlay_F5481C04_C44D_900D_41E0_661E3B547E8A",
 "maps": [
  {
   "hfov": 9.89,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -7.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD, this.camera_E6BCDD3D_E804_3617_41E4_AF0191027929); this.mainPlayList.set('selectedIndex', 46)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02 Left"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.89,
   "image": "this.AnimatedImageResource_C7BD92DD_C8D5_D8FC_41E0_A43BED525861",
   "pitch": 1.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 33.11,
   "distance": 50
  }
 ],
 "id": "overlay_F52EBD94_C44E_F00D_41A2_6E5E8CD042D8",
 "maps": [
  {
   "hfov": 9.89,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE, this.camera_E6352C72_E804_362D_41A2_A7DAB25F105C); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.23,
   "image": "this.AnimatedImageResource_F1744BC5_C118_1A13_41C2_C6D07590D524",
   "pitch": -3.9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -164.06,
   "distance": 100
  }
 ],
 "id": "overlay_CEE12568_C0E8_09C2_41DC_B742C4CC1086",
 "maps": [
  {
   "hfov": 11.23,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -164.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -3.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A856030D_A220_65EA_41E3_78590B588A1B, this.camera_E63A2C82_E804_36EC_41BF_3B9AB493D9F6); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.45,
   "image": "this.AnimatedImageResource_F175FBC5_C118_1A13_41CF_7FCBE437A432",
   "pitch": -4.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 23.9,
   "distance": 100
  }
 ],
 "id": "overlay_CE30A5C9_C0E8_08C0_41D7_AFC0E4651042",
 "maps": [
  {
   "hfov": 8.45,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -4.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB, this.camera_E7715C35_E804_3614_41C8_450FDA4571E6); this.mainPlayList.set('selectedIndex', 50)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.41,
   "image": "this.AnimatedImageResource_C7B322DD_C8D5_D8FC_41E5_F19CBDD4B4FE",
   "pitch": -16.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -13.97,
   "distance": 100
  }
 ],
 "id": "overlay_F062D0F7_C45A_900C_41DC_4B9F1CF9317C",
 "maps": [
  {
   "hfov": 11.41,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -16.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C, this.camera_E7215135_E804_2E14_41D0_842A9FD21666); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.03,
   "image": "this.AnimatedImageResource_F1637BB6_C118_1A71_41D0_5B5C414B2B35",
   "pitch": -11.01,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -20.3,
   "distance": 100
  }
 ],
 "id": "overlay_AFC8AC42_A220_1C7B_41B4_E0990CC150ED",
 "maps": [
  {
   "hfov": 11.03,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -11.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8795465_A220_6C25_41D5_DBAD541AD55C, this.camera_E7153125_E804_2E37_41D7_1503D78FC0C1); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.56,
   "image": "this.AnimatedImageResource_F161EBB6_C118_1A71_41E1_BCE18021F306",
   "pitch": -5.72,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -4.37,
   "distance": 100
  }
 ],
 "id": "overlay_ACA4C9B1_A220_241F_41C7_FE1E46C2DC48",
 "maps": [
  {
   "hfov": 8.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -5.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871, this.camera_E6D22D4D_E804_3674_41E5_79D22F6BDCD9); this.mainPlayList.set('selectedIndex', 51)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.66,
   "image": "this.AnimatedImageResource_C7BCE2DD_C8D5_D8FC_41E7_665E49661324",
   "pitch": -15.04,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 116.13,
   "distance": 100
  }
 ],
 "id": "overlay_F537F918_C44A_9005_41B7_6E3F2B921291",
 "maps": [
  {
   "hfov": 7.66,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -15.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB, this.camera_E6DEED5D_E804_3614_41E2_35457F3B5083); this.mainPlayList.set('selectedIndex', 50)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 11.11,
   "image": "this.AnimatedImageResource_C7BE12DD_C8D5_D8FC_41C0_F12A20381426",
   "pitch": -20.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -173.71,
   "distance": 100
  }
 ],
 "id": "overlay_F7092B3E_C446_907D_41B9_A459CDCF6DBF",
 "maps": [
  {
   "hfov": 11.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -20.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD, this.camera_E6C8DD4D_E804_3674_41E9_2E7ED3B9FF9E); this.mainPlayList.set('selectedIndex', 46)"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 15.3,
   "image": "this.AnimatedImageResource_C7BD62DD_C8D5_D8FC_41DE_347EF22B86BF",
   "pitch": -43.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -44.82,
   "distance": 100
  }
 ],
 "id": "overlay_F0B14F38_C45A_F005_41AD_B4A0B6C7C59B",
 "maps": [
  {
   "hfov": 15.3,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -43.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC, this.camera_E6D8F0E7_E804_2E34_41DC_EAC9E1E12E86); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 16.34,
   "image": "this.AnimatedImageResource_C78B12BE_C8D5_D8BC_41DD_B56AAB07E494",
   "pitch": -27.1,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 54.71,
   "distance": 100
  }
 ],
 "id": "overlay_D0643B88_C44E_B005_41E1_DECE37AA476E",
 "maps": [
  {
   "hfov": 16.34,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 54.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -27.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0, this.camera_E6CC40E7_E804_2E34_4191_135FC8BE2694); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 18.25,
   "image": "this.AnimatedImageResource_C79422BE_C8D5_D8BC_41E3_DC31F560CCB2",
   "pitch": -41.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -122.27,
   "distance": 50
  }
 ],
 "id": "overlay_D295312D_C44A_B01F_41E1_4DD83188BFE6",
 "maps": [
  {
   "hfov": 18.25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -122.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -41.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A8795465_A220_6C25_41D5_DBAD541AD55C, this.camera_E7AC81B1_E804_2E2C_41B9_04E9465E6F97); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.76,
   "image": "this.AnimatedImageResource_F161BBB6_C118_1A71_41E5_7F828A9B3BE3",
   "pitch": -7.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 75.1,
   "distance": 100
  }
 ],
 "id": "overlay_AC4384C3_A220_6C00_41DB_3E09A6E23585",
 "maps": [
  {
   "hfov": 8.76,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -7.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9, this.camera_E7B9F1B1_E804_2E2C_41DC_A115E569FB58); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 5.42,
   "image": "this.AnimatedImageResource_F1614BB6_C118_1A71_41E0_A34B07C4D961",
   "pitch": -3.76,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 100.94,
   "distance": 100
  }
 ],
 "id": "overlay_B3A39E42_A220_3C06_41CF_4190B761A4B2",
 "maps": [
  {
   "hfov": 5.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -3.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF, this.camera_E79DD1A7_E804_2E34_41E2_724DE446A818); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.83,
   "image": "this.AnimatedImageResource_F16EEBB6_C118_1A71_41C5_7F3EAB390A08",
   "pitch": -3.43,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -117.98,
   "distance": 100
  }
 ],
 "id": "overlay_CD144CAC_C0E8_3800_41E0_DF3B677736D2",
 "maps": [
  {
   "hfov": 8.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -117.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -3.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062, this.camera_E7490154_E804_2E14_418D_5021FFA6C2B6); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.1,
   "image": "this.AnimatedImageResource_F16BBBB6_C118_1A71_41BB_186F0BABD61B",
   "pitch": -4.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -23.07,
   "distance": 100
  }
 ],
 "id": "overlay_ACFE315F_A260_24D9_41E0_66969BE2098C",
 "maps": [
  {
   "hfov": 7.1,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -4.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3, this.camera_E73B4144_E804_2E75_41E9_514CFBCFE169); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.1,
   "image": "this.AnimatedImageResource_F16B5BB6_C118_1A71_41CD_04C959651707",
   "pitch": -5.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 165.01,
   "distance": 100
  }
 ],
 "id": "overlay_CED9242C_C0F8_0FE8_41A3_0546CD86457A",
 "maps": [
  {
   "hfov": 7.1,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -5.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C9AB0616_C44B_700D_41E5_70875426881D, this.camera_E72FE144_E804_2E75_4193_9D6F3D1DA244); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.58,
   "image": "this.AnimatedImageResource_C79AB2BE_C8D5_D8BC_4189_721EC715696A",
   "pitch": -12.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 59.83,
   "distance": 100
  }
 ],
 "id": "overlay_D2720191_C446_9007_41E1_0E2AF9024A15",
 "maps": [
  {
   "hfov": 9.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 59.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -12.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C, this.camera_E65F4AFD_E804_3214_41E0_C76684FDFECB); this.mainPlayList.set('selectedIndex', 36)"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 17.72,
   "image": "this.AnimatedImageResource_C78DD2CD_C8D5_D8DF_41DB_C4A42B61DD8D",
   "pitch": -9.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.4,
   "distance": 100
  }
 ],
 "id": "overlay_DAFCAE2D_C4CE_901F_41E7_39E9FC44B010",
 "maps": [
  {
   "hfov": 17.72,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -9.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DCACD847_C447_F00C_41E0_44022FB89EEB, this.camera_E66AAB0C_E804_33F5_41E2_3A22BB1D79AB); this.mainPlayList.set('selectedIndex', 38)"
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.79,
   "image": "this.AnimatedImageResource_C78D22CD_C8D5_D8DF_41E6_9CD80455CA9E",
   "pitch": -9.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 40.24,
   "distance": 100
  }
 ],
 "id": "overlay_DBD08301_C4CA_9007_41A0_8F9A23FFC319",
 "maps": [
  {
   "hfov": 7.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 40.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -9.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92, this.camera_E6548AED_E804_3234_41D0_2937975AE517); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 25.27,
   "image": "this.AnimatedImageResource_C78CD2CD_C8D5_D8DF_41D3_9807888BC3A1",
   "pitch": -37.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -164.72,
   "distance": 50
  }
 ],
 "id": "overlay_E6F4FEA9_C4CA_9007_41D4_6FF4EEB047BC",
 "maps": [
  {
   "hfov": 25.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -164.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -37.84
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78332CD_C8D5_D8DF_41E0_27687378A44B",
 "levels": [
  {
   "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7BBF2CD_C8D5_D8DF_41C1_6549C81446C9",
 "levels": [
  {
   "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7BB92CD_C8D5_D8DF_41D2_61975D82B431",
 "levels": [
  {
   "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7BAE2CD_C8D5_D8DF_419F_0AF07CA9848B",
 "levels": [
  {
   "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7BA62CD_C8D5_D8DF_41E1_E838C6A0C194",
 "levels": [
  {
   "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7B9E2CD_C8D5_D8DF_41E5_44DE9514215E",
 "levels": [
  {
   "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16E8BB6_C118_1A71_41DA_B9CCA6E76E1E",
 "levels": [
  {
   "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16E4BB6_C118_1A71_41D7_311F231EB050",
 "levels": [
  {
   "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16E1BB6_C118_1A71_41CE_98690E10222A",
 "levels": [
  {
   "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1771BC5_C118_1A13_41D4_36AC76C6D39D",
 "levels": [
  {
   "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1748BC5_C118_1A13_41E4_F14748345E96",
 "levels": [
  {
   "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1683BB6_C118_1A71_41C8_44F9CF8405D7",
 "levels": [
  {
   "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F169DBB6_C118_1A71_41E2_BCE05DE50EDC",
 "levels": [
  {
   "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1696BB6_C118_1A71_41DA_A6622FB46816",
 "levels": [
  {
   "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C79862BE_C8D5_D8BC_41E6_56ABEC3F824C",
 "levels": [
  {
   "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C79822BE_C8D5_D8BC_41DA_ACAFA17F8649",
 "levels": [
  {
   "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1746BB6_C118_1A71_41E4_3862A6C71A11",
 "levels": [
  {
   "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F177ABB6_C118_1A71_41CD_2B0AB77B1730",
 "levels": [
  {
   "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1775BB6_C118_1A71_41D5_F0D96D789E4C",
 "levels": [
  {
   "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F168EBB6_C118_1A71_41E7_0B149D86E451",
 "levels": [
  {
   "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1687BB6_C118_1A71_41E2_3A856D273232",
 "levels": [
  {
   "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C799B2BE_C8D5_D8BC_41D8_93C096E560A1",
 "levels": [
  {
   "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16CABB6_C118_1A71_417C_8F0F3BBD1E17",
 "levels": [
  {
   "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16C7BB6_C118_1A71_41B4_45CAF725DD20",
 "levels": [
  {
   "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16C3BB6_C118_1A71_41D1_FE20F36D023B",
 "levels": [
  {
   "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78232CD_C8D5_D8DF_41BC_F5ACB65D5ED7",
 "levels": [
  {
   "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C781C2CD_C8D5_D8DF_41CA_2E48968BBE16",
 "levels": [
  {
   "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78142CD_C8D5_D8DF_41E6_318B54809194",
 "levels": [
  {
   "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8814008_C168_0609_41CB_9DAFC98D5250",
 "levels": [
  {
   "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1757BC5_C118_1A13_41E8_2395589DA20B",
 "levels": [
  {
   "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1751BC5_C118_1A13_41E2_9D30B91AFAB1",
 "levels": [
  {
   "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F172BBC5_C118_1A13_41E6_C5F5D1217962",
 "levels": [
  {
   "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1720BC5_C118_1A13_41CE_4046364E1E81",
 "levels": [
  {
   "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78FD2CD_C8D5_D8DF_41E2_85E68DFD7F1A",
 "levels": [
  {
   "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78F22CD_C8D5_D8DF_41E7_9A7C11F16CF7",
 "levels": [
  {
   "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78ED2CD_C8D5_D8DF_41BA_59E194E4F3C5",
 "levels": [
  {
   "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78E42CD_C8D5_D8DF_41C6_59B61E788FCD",
 "levels": [
  {
   "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C780F2CD_C8D5_D8DF_41DC_7F63A6E13BC6",
 "levels": [
  {
   "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78062CD_C8D5_D8DF_41E5_296D7F77381B",
 "levels": [
  {
   "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C787F2CD_C8D5_D8DF_41D1_EA45C9E3CD23",
 "levels": [
  {
   "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F176CBB6_C118_1A71_41D5_A865016ECBFB",
 "levels": [
  {
   "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1767BB6_C118_1A71_41E3_EA30513AA445",
 "levels": [
  {
   "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1760BB6_C118_1A71_41D3_517088A9E937",
 "levels": [
  {
   "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F177ABB6_C118_1A71_41DD_B836614DC01B",
 "levels": [
  {
   "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16FBBB6_C118_1A71_41AA_B4689A1A502C",
 "levels": [
  {
   "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16F7BB6_C118_1A71_41D6_4CA05D437533",
 "levels": [
  {
   "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16F3BB6_C118_1A71_41D1_AA880DDD528E",
 "levels": [
  {
   "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78BB2BE_C8D5_D8BC_41DD_D93E91C67FB8",
 "levels": [
  {
   "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16A4BB6_C118_1A71_41E0_1042A5A5566B",
 "levels": [
  {
   "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16A1BB6_C118_1A71_41D5_89B73E25EF6E",
 "levels": [
  {
   "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C79BA2BE_C8D5_D8BC_41DD_06C1116B5E2B",
 "levels": [
  {
   "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78B52BE_C8D5_D8BC_41C2_31C985978060",
 "levels": [
  {
   "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78AF2BE_C8D5_D8BC_41D8_281A46B04E17",
 "levels": [
  {
   "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16DABB6_C118_1A71_41D5_94BF62A94BA9",
 "levels": [
  {
   "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16D6BB6_C118_1A71_41BF_04BA6D187904",
 "levels": [
  {
   "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16AEBB6_C118_1A71_41E4_571F4D6B76C4",
 "levels": [
  {
   "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16ABBB6_C118_1A71_41E2_D9D83B0EFCD5",
 "levels": [
  {
   "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F173ABC5_C118_1A13_41A8_8B9CD4D5CE08",
 "levels": [
  {
   "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1734BC5_C118_1A13_41D3_65D329E746B8",
 "levels": [
  {
   "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7BFD2CD_C8D5_D8DF_41C0_940723B8F78C",
 "levels": [
  {
   "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7BF32CD_C8D5_D8DF_41B6_CAD2AB5E2CBD",
 "levels": [
  {
   "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7BE82CD_C8D5_D8DF_41DD_2B6308224250",
 "levels": [
  {
   "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C785F2CD_C8D5_D8DF_41D3_5A05F18F7209",
 "levels": [
  {
   "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78562CD_C8D5_D8DF_41A8_7514C0240782",
 "levels": [
  {
   "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C784F2CD_C8D5_D8DF_41C3_0B1DC6F62EBE",
 "levels": [
  {
   "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78462CD_C8D5_D8DF_41E2_783930EEE0F4",
 "levels": [
  {
   "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7BCF2DD_C8D5_D8FC_41E2_5F7A30EB7996",
 "levels": [
  {
   "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7BC42DD_C8D5_D8FC_41CA_5C0F975A9EF4",
 "levels": [
  {
   "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7B3A2DD_C8D5_D8FC_41DE_ABCAC90C040E",
 "levels": [
  {
   "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78A42BE_C8D5_D8BC_41E2_E4B9B1C41F56",
 "levels": [
  {
   "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78A12BE_C8D5_D8BC_41D1_17C9A1D0875D",
 "levels": [
  {
   "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78982BE_C8D5_D8BC_41DB_02D1B918DF94",
 "levels": [
  {
   "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7B972CD_C8D5_D8DF_41DF_D6DE8639C9C8",
 "levels": [
  {
   "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7B8D2CD_C8D5_D8DF_41E5_CAC687F4681C",
 "levels": [
  {
   "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7B842CD_C8D5_D8DF_41D7_375D094B5E43",
 "levels": [
  {
   "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C79442BE_C8D5_D8BC_418C_6C3A4346CA37",
 "levels": [
  {
   "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78BC2BE_C8D5_D8BC_41D0_CCC207FBBFFC",
 "levels": [
  {
   "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78B62BE_C8D5_D8BC_41E1_40A444E2FA52",
 "levels": [
  {
   "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16DDBB6_C118_1A71_41C9_25C79394BF63",
 "levels": [
  {
   "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16F1BB6_C118_1A71_41E7_1733A198E071",
 "levels": [
  {
   "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16CDBB6_C118_1A71_41E2_5C1006B51079",
 "levels": [
  {
   "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78C42CD_C8D5_D8DF_41D1_259A7B85C0E5",
 "levels": [
  {
   "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C783A2CD_C8D5_D8DF_41D9_8C87A1458BAA",
 "levels": [
  {
   "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F170FBC5_C118_1A13_41B4_C1421425162C",
 "levels": [
  {
   "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C791D2BE_C8D5_D8BC_41E0_C93F93EA102E",
 "levels": [
  {
   "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C79152BE_C8D5_D8BC_41D5_0D9AB2DEEE32",
 "levels": [
  {
   "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1712BC5_C118_1A13_41D4_2641AD5A9841",
 "levels": [
  {
   "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C79522BE_C8D5_D8BC_41DC_2180002C36E3",
 "levels": [
  {
   "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C794D2BE_C8D5_D8BC_4199_61C96BA37B9C",
 "levels": [
  {
   "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16C7BB6_C118_1A71_416D_27D0E1868284",
 "levels": [
  {
   "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16C0BB6_C118_1A71_41C5_9AB01F86C368",
 "levels": [
  {
   "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78932BE_C8D5_D8BC_41E5_2CC968B89919",
 "levels": [
  {
   "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78882BE_C8D5_D8BC_41E7_5D172863477A",
 "levels": [
  {
   "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78832CD_C8D5_D8DF_41D5_003D0BD41FB5",
 "levels": [
  {
   "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C782D2CD_C8D5_D8DF_41E4_245AC7EF40B8",
 "levels": [
  {
   "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78222CD_C8D5_D8DF_41D9_2947E0C43393",
 "levels": [
  {
   "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F17ECBC5_C118_1A13_41B9_D50EF0709E05",
 "levels": [
  {
   "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78182CD_C8D5_D8DF_41E1_F92EAED610C1",
 "levels": [
  {
   "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78102CD_C8D5_D8DF_41CA_8014AA2D2D7D",
 "levels": [
  {
   "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1776BB6_C118_1A71_41CA_014FFED9ABDC",
 "levels": [
  {
   "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F174FBB6_C118_1A71_41D9_381037803008",
 "levels": [
  {
   "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1709BC5_C118_1A13_41D6_A0B219941888",
 "levels": [
  {
   "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1703BC5_C118_1A13_41E5_21F037C3CED5",
 "levels": [
  {
   "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F171ABC5_C118_1A13_41E5_E6BBD414F54E",
 "levels": [
  {
   "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EB36449A_C118_0E85_41CB_963E3C405596",
 "levels": [
  {
   "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78742CD_C8D5_D8DF_41D9_07D9286737D6",
 "levels": [
  {
   "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C786E2CD_C8D5_D8DF_41D3_49D54894B048",
 "levels": [
  {
   "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78642CD_C8D5_D8DF_41DA_1254C17AAFA1",
 "levels": [
  {
   "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C796F2BE_C8D5_D8BC_41B1_71529968B5DB",
 "levels": [
  {
   "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C79692BE_C8D5_D8BC_41DF_FA81CC66826A",
 "levels": [
  {
   "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C79632BE_C8D5_D8BC_41DC_4C6F7F18699E",
 "levels": [
  {
   "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C795D2BE_C8D5_D8BC_41E4_56CFD08C4590",
 "levels": [
  {
   "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7BE12CD_C8D5_D8DF_41E0_1EB7A448E0F6",
 "levels": [
  {
   "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7BD92DD_C8D5_D8FC_41E0_A43BED525861",
 "levels": [
  {
   "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1744BC5_C118_1A13_41C2_C6D07590D524",
 "levels": [
  {
   "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F175FBC5_C118_1A13_41CF_7FCBE437A432",
 "levels": [
  {
   "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7B322DD_C8D5_D8FC_41E5_F19CBDD4B4FE",
 "levels": [
  {
   "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1637BB6_C118_1A71_41D0_5B5C414B2B35",
 "levels": [
  {
   "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F161EBB6_C118_1A71_41E1_BCE18021F306",
 "levels": [
  {
   "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7BCE2DD_C8D5_D8FC_41E7_665E49661324",
 "levels": [
  {
   "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7BE12DD_C8D5_D8FC_41C0_F12A20381426",
 "levels": [
  {
   "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C7BD62DD_C8D5_D8FC_41DE_347EF22B86BF",
 "levels": [
  {
   "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78B12BE_C8D5_D8BC_41DD_B56AAB07E494",
 "levels": [
  {
   "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C79422BE_C8D5_D8BC_41E3_DC31F560CCB2",
 "levels": [
  {
   "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F161BBB6_C118_1A71_41E5_7F828A9B3BE3",
 "levels": [
  {
   "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F1614BB6_C118_1A71_41E0_A34B07C4D961",
 "levels": [
  {
   "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16EEBB6_C118_1A71_41C5_7F3EAB390A08",
 "levels": [
  {
   "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16BBBB6_C118_1A71_41BB_186F0BABD61B",
 "levels": [
  {
   "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F16B5BB6_C118_1A71_41CD_04C959651707",
 "levels": [
  {
   "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C79AB2BE_C8D5_D8BC_4189_721EC715696A",
 "levels": [
  {
   "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78DD2CD_C8D5_D8DF_41DB_C4A42B61DD8D",
 "levels": [
  {
   "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78D22CD_C8D5_D8DF_41E6_9CD80455CA9E",
 "levels": [
  {
   "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_C78CD2CD_C8D5_D8DF_41D3_9807888BC3A1",
 "levels": [
  {
   "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
}],
 "width": "100%",
 "layout": "absolute"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
