export function getYouTubeVideID(id) { 
    const parsedID = new URL(id);
    const videoID = parsedID.searchParams.get('v');
    return videoID
 }