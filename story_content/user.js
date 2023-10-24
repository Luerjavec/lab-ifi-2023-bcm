function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6051jd77Ypm":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

function findLMSAPI(win) {
  if (win.hasOwnProperty("GetStudentID")) return win;

  else if (win.parent == win) return null;

  else return findLMSAPI(win.parent);
}

var lmsAPI = findLMSAPI(this);
var myName = lmsAPI.GetStudentName();
var array = myName.split(',');
var newName = array[1];
player.SetVar("VariableName", newName);
}

