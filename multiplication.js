function multiplicationTable()
{
  var s="";
  for(var outer_count=1;outer_count<=12;outer_count++)
  {

    for(var inner_count=1;inner_count<=12;inner_count++)
    {
        s=s+(outer_count*inner_count)+" ";

    }
console.log(s);
s="";
  }
}
