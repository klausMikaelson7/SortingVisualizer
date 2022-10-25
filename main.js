var cont  = document.getElementById('array-container');
console.log("hello");


var bubble = document.querySelector('#bubble');
var merge = document.querySelector('#merge');
var insertion = document.querySelector('#insertion');
var quick = document.querySelector('#quick');

var selection = document.querySelector('#selection');

var inp_as=document.getElementById('a_size');
var array_size=inp_as.value;
console.log(array_size);
var inp_aspeed=document.getElementById("a_speed");


bubble.addEventListener('click',()=>{
    Bubble();
})
merge.addEventListener('click',()=>{
    Merge();
})
insertion.addEventListener('click',()=>{
    Insertion();
})
quick.addEventListener('click',()=>{
    QuickSort();
})

selection.addEventListener('click',()=>{
    Selection();
})





var div_sizes = [];
var divs = [];
var x = "#79DAE8";
function generateArray(){
    cont.innerHTML = "";
    for(var i=0;i<array_size;i++){
        div_sizes[i] = randomInt(5,100);
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:cyan; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }

}
function update_array_size()
{
    array_size=inp_as.value;
    generateArray();
}

window.onload=update_array_size();


function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
var speed = 1000;

inp_aspeed.addEventListener('click',()=>{
    console.log(inp_aspeed.value);
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    delay_time = 10000/(Math.floor(array_size/10)*speed);
})

var delay_time = 10000/(Math.floor(array_size/10)*speed);

var counter_delay = 0;

function div_update(cont,height,color){
    window.setTimeout(()=>{
        cont.style = " margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },counter_delay+=delay_time);
}


function Bubble(){
    counter_delay=0;
    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "orange");//Color update
                div_update(divs[j+1],div_sizes[j+1], "orange");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "orange");//Height update
                div_update(divs[j+1],div_sizes[j+1], "orange");//Height update
            }
            div_update(divs[j],div_sizes[j], "cyan");//Color updat
        }
        div_update(divs[j],div_sizes[j], "lightgreen");//Color update
    }
    div_update(divs[0],div_sizes[0], "lightgreen");//Color update
}

// Merge Sort
function merge_sort(start,mid,end){
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"orange");//Color update
        }
        else if(q>end)
        {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"orange");//Color update
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"orange");//Color update
        }
        else
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"orange");//Color update
        }
    }
    for(var t=0;t<k;t++)
    {
        div_sizes[start++]=Arr[t];
        div_update(divs[start-1],div_sizes[start-1],"lightgreen");//Color update
    }


}
function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_sizes[mid],"yellow");//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}

function Merge(){
    c_delay=0;

    merge_partition(0,array_size-1);
}


// Selection Sort

function Selection(){
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"orange");//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"cyan");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"orange");//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"cyan");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"orange");//Height update
            div_update(divs[i],div_sizes[i],"orange");//Height update
            div_update(divs[index_min],div_sizes[index_min],"cyan");//Color update
        }
        div_update(divs[i],div_sizes[i],"lightgreen");//Color update
    }
    div_update(divs[i],div_sizes[i],"lightgreen");//Color update

}


// Insertion Sort

function Insertion(){
    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"yellow");//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"orange");//Color update
            div_update(divs[i+1],div_sizes[i+1],"orange");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"orange");//Height update
            div_update(divs[i+1],div_sizes[i+1],"orange");//Height update
    
            div_update(divs[i],div_sizes[i],"cyan");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"cyan");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"lightgreen");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"lightgreen");//Color update

}


// QuickSort 
function QuickSort(){
    c_delay=0;
    quick_sort(0,array_size-1);


}
function quick_sort (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
}
function quick_partition (start, end)
{
    var i = start + 1;
    var piv = div_sizes[start] ;//make the first element as pivot element.
    div_update(divs[start],div_sizes[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes[ j ] < piv)
            {
                div_update(divs[j],div_sizes[j],"yellow");//Color update

                div_update(divs[i],div_sizes[i],"orange");//Color update
                div_update(divs[j],div_sizes[j],"orange");//Color update

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                div_update(divs[i],div_sizes[i],"orange");//Height update
                div_update(divs[j],div_sizes[j],"orange");//Height update

                div_update(divs[i],div_sizes[i],"cyan");//Height update
                div_update(divs[j],div_sizes[j],"cyan");//Height update

                i += 1;
            }
    }
    div_update(divs[start],div_sizes[start],"orange");//Color update
    div_update(divs[i-1],div_sizes[i-1],"orange");//Color update
    
    var temp=div_sizes[start];//put the pivot element in its proper place.
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_update(divs[start],div_sizes[start],"orange");//Height update
    div_update(divs[i-1],div_sizes[i-1],"orange");//Height update

    for(var t=start;t<=i;t++)
    {
        div_update(divs[t],div_sizes[t],"lightgreen");//Color update
    }

    return i-1;//return the position of the pivot
}


