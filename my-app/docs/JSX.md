## JSX

### What

#### 1. Javascript extention
#### 2. Giúp viết HTML trong JS
```
const element = <h1>Hello, {name}</h1>;
```

### HOW

#### 1. Dạng biến trong component với cặp {}
```
<Duc name={this.props.children}></Duc>
```

#### 2. Viết gần giống HTML với công cụ convert: HTML to JSX complier
```
<div className="panel-footer">
    <button type="button" className="btn btn-warning">View</button>
</div>
```

## Map()
- Duyệt từng phần từ trong mảng -> foreach{}

ex:
```
const so = [1, 2, 3];
const so2 = so.map((x) => x*2 + ", ");

class MapNumb extends Component {
    render(
        return (
            <div>{so2}</div>
        )
    );
}
    
```



