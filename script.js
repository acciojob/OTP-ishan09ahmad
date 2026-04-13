let codesEl=document.querySelectorAll(".code");

codesEl.forEach((code,index)=>
	{
	code.addEventListener("input",()=>
			{
				if(!/^[0-9]$/.test(code.value))
		{
			code.value="";
			return;
		}
				if(code.value.length===1)
						{
							if(index<codesEl.length-1)
							{
								codesEl[index+1].focus();
							}
						}
				
			});

		code.addEventListener("keydown",(e)=>
			{
				if(e.key=="Backspace")
				{
					if(code.value=="" && index>0 )
					{
						codesEl[index-1].focus();
					}
				}
			})
	})