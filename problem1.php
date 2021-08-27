<?php   

class InheritArrayObject extends ArrayObject {

    public function __set($name, $val) {
        $this[$name] = $val;
    }

    public function displayAsTable() {
        $table =  '<table>';
        $table .= '<tbody>';    
        $all_data = (array) $this;
        foreach ($all_data as $key => $value) {
            $table .= '<tr>';
            $table .= '<td>' . $key . '</td>';
            $table .= '<th>' . $value . '</th>';
            $table .= '</tr>';
        }    
        $table .= '</tbody>';
        $table .=  '</table>';    
        return $table;
    } 
}

$obj = new InheritArrayObject();    
$obj->Name = 'Chandrima Barua'; 
$obj->Gender = 'Female'; 
$obj->Religion = 'Buddhism'; 
$obj->Interview_For = 'Field Nation';

echo $obj->displayAsTable();    

?>