<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept"); 
header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, X-Auth-Token');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "";
if(isset($data->what)){
    switch ($data->what) {
    
        // user(idUser,username, password, name, phone, email, cmnd, address, image, role) 
        // tripDriver(idTripDriver, idUser, status, source, dest, price, numChair, idMid, startDate, endDate)
        // chair(idChair,noChair, idTripDriver, idUser, status, registerDate, price)
        // provine(idPro, name, summary)
        // portal(idPortal, typeRequest(0 = đăng ký, 1 = hủy, 2 done), status, idUser, idChair, accountBank, code)
        
        //100. kiểm tra user tồn tại hay không(insert user)
        case 100: {
            $sql = "SELECT count(1) FROM user WHERE username = '$data->username'";
            break;
        }
       
        //101. đăng ký(insert user)
        case 101: {
            $sql = "INSERT INTO user(username,password,name,phone,email,cmnd,address,image,role)
                VALUES ('$data->username','$data->password','$data->name','$data->phone','$data->email'
                ,'$data->cmnd','$data->address','$data->image','$data->role')";
            break;
        }
        
        //2. cập nhật thông tin(update user)
        case 2: {
            $sql = "UPDATE user SET password='$data->password',name='$data->name',phone='$data->phone'
                ,email='$data->email',cmnd='$data->cmnd',address='$data->address',image='$data->image',role='$data->role'
                WHERE idUser='$data->idUser' and  username='$data->username' and password='$data->password'";
            break;
        }
    
        //2. cập nhật thông tin(update password user )
        case 200: {
            $sql = "UPDATE user SET password='$data->password' 
                WHERE idUser='$data->idUser' and  username='$data->username'";
            break;
        }
        
        //30. quản trị viên xem thông tin và xóa(select, delete user)
        case 30: {
            $sql = "SELECT * FROM user where role='$data->role' ";
            break;
        }
        
        //31. quản trị viên xem thông tin và xóa(select, delete user)
        case 31: {
            $sql = "SELECT * FROM user WHERE idUser='$data->idUser' ";
            break;
        }
        
        //32. quản trị viên xem thông tin và xóa(select, delete user)
        case 32: {
            
            //kiem tra nguoi xoa co phai la admin hay khong
            $sql    = "SELECT * FROM user WHERE username='admin' and password='$data->password'";
            $result = $conn->query($sql);
            
            //neu dung la admin thi moi cho xoa
            if (isset($result->num_rows) && $result->num_rows > 0) {
                $sql = "DELETE FROM user WHERE idUser='$data->idUser'";
            }
            break;
        }
        
        //4. đăng nhập(check username, password from user)
        case 4: {
            $sql = "SELECT * FROM user WHERE username='$data->username' and password='$data->password'";
            break;
        }
        
        //5. xem thông tin chính mình(select one user by idUser)
        case 5: {
            $sql = "SELECT * FROM user WHERE idUser='$data->idUser'";
            break;
        }
        
        //6. xem các chuyến đi của chính mình(select chair inner join tripDriver)
        // tripDriver(idTripDriver, idUser, status, source, dest, price, numChair, idMid, startDate, endDate)
        // chair(idChair,noChair, idTripDriver, idUser, status, registerDate, price)
        case 60: {
            $sql = "SELECT * FROM tripDriver WHERE idUser = '$data->idUser'";
            break;
        }
    
        //6. xem các chuyến đi của chính mình(select chair inner join tripDriver)
        // tripDriver(idTripDriver, idUser, status, source, dest, price, numChair, idMid, startDate, endDate)
        // chair(idChair,noChair, idTripDriver, idUser, status, registerDate, price)
        case 61: {
            $sql = "SELECT * FROM chair WHERE idTripDriver = '$data->idTripDriver'";
            break;
        }
        
        //7. yêu cầu hủy ghế ngồi của mình đã đặt(insert portal)
        // portal(idPortal, typeRequest(0 = đăng ký, 1 = hủy), status, idUser, idChair, accountBank, code)
        case 7: {
            $sql = "INSERT INTO portal(typeRequest,status, idUser, idChair, accountBank, code)
             VALUES('$data->typeRequest','$data->status','$data->idUser','$data->idChair','$data->accountBank','$data->code')";
            break;
        }
        
        //8. quản trị viên xem danh sách portal(select portal where status = 0(chưa xử lý))
        case 8: {
            $sql = "SELECT * FROM portal WHERE status='$data->status'";
            break;
        }
        
        //9. qtv đồng ý hay hủy bỏ(update portal)
        case 9: { 
            $sql = "UPDATE portal SET status = '$data->status' WHERE idUser='$data->idUser'";
            break;
        }
        
        //10. cập nhật trạng thái ghế khi hủy bỏ(update chair set idUser, status)
        // chair(idChair,noChair, idTripDriver, idUser, status, registerDate, price)
        case 10: {
            $sql = "UPDATE chair SET idUser='$data->idUser',status='$data->status' WHERE idChair = ' $data->idChair ' ";
            break;
        }
        
        //11. xem thông tin chuyến xe của mình(select tripDriver where idUser)
        case 11: {
            $sql = "SELECT * FROM tripDriver WHERE idUser='$data->idUser'";
            break;
        }
        
        //12. cập nhật thông tin chuyến xe(update tripDriver)
        // tripDriver(idTripDriver, idUser, status, source, dest, price, numChair, idMid, startDate, endDate)
        case 12: {
            $sql = "UPDATE tripDriver SET  status='$data->status',source='$data->source',dest='$data->dest'
            ,price='$data->price',numChair='$data->numChair',idMid='$data->idMid',startDate='$data->startDate'
            ,endDate='$data->endDate' WHERE idTripDriver='$data->idTripDriver'";
            break;
        }
        
        //13. xóa chuyến xe không muốn đi(delete tripDriver)
        case 13: {
            $sql = "DELETE FROM tripDriver WHERE idTripDriver = '$data->idTripDriver' ";
            break;
        }
        
        //status: 0=xe đang đăng ký, 1=xe có thể hoạt động, 2=xe đang ký giả
        //14. thêm chuyến xe mới(insert tripDriver) 
        //sau này sẽ tự động cho nhà xe có uy tín không cần xác nhận
        case 14: {
            $sql = "INSERT INTO tripDriver(idUser, status, source, dest, price, numChair, idMid, startDate, endDate)
            VALUES('$data->idUser','$data->status','$data->source','$data->dest','$data->price','$data->numChair'
            ,'$data->idMid','$data->startDate','$data->endDate')";
            break;
        }
        
        //15. thêm số ghế đi kèm với chuyến xe(insert chair with idTripDriver)
        // chair(idChair,noChair, idTripDriver, idUser, status, registerDate, price)
        case 15: {
            $sql = "INSERT INTO chair(noChair, idTripDriver, idUser, status, registerDate, price)
            VALUES('$data->noChair','$data->idTripDriver','$data->idUser','$data->status','$data->registerDate','$data->price')";
            break;
        }
        
        //16. kiểm tra xe có trống hay full(select count(1) from chair where idTripDriver and idUser='')
        case 16: {
            $sql = "SELECT COUNT(idUser) FROM chair WHERE idTripDriver = '$data->idTripDriver' AND idUser = '$data->idUser'";
            break;
        }
        
        //17. cập nhật số ghế của xe và chair(update tripDriver và delete chair, insert chair)
        // chair(idChair,noChair, idTripDriver, idUser, status, registerDate, price)
        case 170: {
            $sql = "DELETE FROM chair WHERE idChair='$data->idChair' ";
            break;
        }
    
        //17. cập nhật số ghế của xe và chair(update tripDriver và delete chair, insert chair)
        // chair(idChair,noChair, idTripDriver, idUser, status, registerDate, price)
        case 171: {
            $sql = "UPDATE chair()";
            break;
        }
    
        //17. cập nhật số ghế của xe và chair(update tripDriver và delete chair, insert chair)
        // chair(idChair,noChair, idTripDriver, idUser, status, registerDate, price)
        case 172: {
            $sql = "UPDATE chair()";
            break;
        }
            
        //18. hiện danh sách ghế của chuyến xe(select * from chair where idTripDriver)
        case 18: {
            $sql = "SELECT * FROM chair WHERE idTripDriver = '$data->idTripDriver' ";
            break;
        }
        
        //19. hiện thông tin người đăng ký nếu ghế có đăng ký(select * chair inner join user)
        // user(idUser,username, password, name, phone, email, cmnd, address, image, role) 
        // chair(idChair,noChair, idTripDriver, idUser, status, registerDate, price)
        case 19: {
            $sql = "SELECT T1.noChair,idTripDriver,status,registerDate,price,T2.name, phone, email, cmnd, address, image 
            FROM chair T1 INNER JOIN user T2 ON T1.idUser = T2.idUser";
            break;
        }
        
        //20. lấy thông tin chuyến đi thoải mãn source, dest, date(select tripDriver)
        // tripDriver(idTripDriver, idUser, status, source, dest, price, numChair, idMid, startDate, endDate)
        // nếu $source>$dest
        // (source>=$source && source <=$dest ) 
        //status: 0=xe đang đăng ký, 1=xe có thể hoạt động, 2=xe đang ký giả
        case 201: {
            $sql = "SELECT * FROM tripDriver WHERE (source>='$data->source' && dest <='$data->dest') 
            AND  '$data->startDate' BETWEEN startDate AND endDate AND status=1" ;
            break;
        }
    
         //20. lấy thông tin chuyến đi thoải mãn source, dest, date(select tripDriver)
        // tripDriver(idTripDriver, idUser, status, source, dest, price, numChair, idMid, startDate, endDate)
        // nếu $source<$dest
        // (source<=$source && source >=$dest )
        case 202: {
            $sql = "SELECT * FROM tripDriver WHERE (source<='$data->source' && dest >='$data->dest') 
            AND '$data->startDate' BETWEEN startDate AND endDate AND status=1";
            break;
        }
        
        //21. đăng ký chổ ngồi trống dựa vào (16) (insert portal)
        // portal(idPortal, typeRequest(0 = đăng ký, 1 = hủy), status, idUser, idChair, accountBank, code)
        case 21: {
            $sql = "INSERT INTO portal(typeRequest, status, idUser, idChair, accountBank, code)";
            break;
        }
            
            
    }
    
    //excute sql 
    $result = $conn->query($sql); 
    
    // echo $sql."<br>";
    // echo json_encode($result);
    if (isset($result->num_rows) && ($result->num_rows > 0)) {
        // output data of each row
        // echo "pho";
        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        echo json_encode($data);
    } else {
        // echo json_encode($result);

        //get id affter insert tripdriver
        if($data->what==14){
            $last_id = $conn->insert_id;
            echo '[{"id":'.$last_id.'}]';
        }else{
            echo "null";
        }
    }
}
$conn->close();
?>
