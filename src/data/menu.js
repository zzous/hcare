export const menuLists =  [
    {label: "회원관리", url:'', depth:true, isActive:false,
        depth_sub:[
            {label:"회원정보관리", url:'', isActive:false,
                menuitems:[
                    {label:"회원정보관리", url:"/memberinfo", isActive:false},
                    {label:"자격상실명단관리", url:"/", isActive:false}
                ]
            },
            {label:"휴먼회원관리", url:'', isActive:false,
                menuitems:[
                    {label:"회원정보관리", url:"/memberinfo", isActive:false},
                    {label:"자격상실명단관리", url:"/", isActive:false}
                ]
            },
            {label:"탈퇴회원관리",suburl:"/",isActive:false,
                menuitems:[
                    {label:"회원정보관리", url:"/memberinfo", isActive:false},
                    {label:"자격상실명단관리", url:"/", isActive:false}
                ]
            }, 
        ]
    },
    {label: "서비스 이용관리", url:'',  depth:true, isActive:false,
        depth_sub:[
            {label:"서비스 상품관리", url:'', isActive:false,
                menuitems:[
                    {label:"상품요청 관리", url:"/memberinfo", isActive:false},
                    {label:"상품목록", url:"/", isActive:false}
                ]
            },
            {label:"루틴관리", url:'', isActive:false,
                menuitems:[
                    {label:"공개 루틴 관리", url:"/memberinfo", isActive:false},
                    {label:"타임 루틴 관리", url:"/", isActive:false}
                ]
            },
            {label:"탈퇴회원관리",suburl:"/",isActive:false,
                menuitems:[
                    {label:"회원정보관리", url:"/memberinfo", isActive:false},
                    {label:"자격상실명단관리", url:"/", isActive:false}
                ]
            }, 
        ]
    },
]
