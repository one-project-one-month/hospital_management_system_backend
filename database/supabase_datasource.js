import { getSupabase } from "./supabase.js";

export const supabase = getSupabase();

//
// Auth
//
export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log("error=>", error);

    return {
      data: null,
      error: error.message,
    };
  }

  return {
    data: null,
    error: null,
  };
};

export const getCurrentSession = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.log("error=>", error);

    return {
      data: null,
      error: error.message,
    };
  }

  return {
    data,
    error: null,
  };
};

export const emailLogin = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    console.log("error=>", error);

    return {
      data: null,
      error: error.message,
    };
  }

  return {
    data,
    error: null,
  };
};

export const emailSignUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    console.log("error=>", error);

    return {
      data: null,
      error: error.message,
    };
  }

  return {
    data,
    error: null,
  };
};

//
// Data
//
export const getAllData = async (tableName, extraQuery = "") => {
  const { data, error } = await supabase
    .from(tableName)
    .select(`* ${extraQuery !== "" && "," + extraQuery}`);

  if (error) {
    console.log("error=>", error);

    return {
      data: null,
      error: error.message,
    };
  }

  return {
    data,
    error: null,
  };
};

export const getSomeData = async (tableName, columnName, columnValue) => {
  const { data, error } = await supabase
    .from(tableName)
    .select("*")
    .eq(columnName, columnValue);

  if (error) {
    console.log("error=>", error);

    return {
      data: null,
      error: error.message,
    };
  }

  return {
    data,
    error: null,
  };
};

export const getAllDataByFilteredCol = async (
  tableName,
  columnName,
  columnValue,
  extraQuery = ""
) => {
  const { data, error } = await supabase
    .from(tableName)
    .select(`* ${extraQuery !== "" && "," + extraQuery}`)
    .eq(columnName, columnValue);

  if (error) {
    console.log("error=>", error);

    return {
      data: null,
      error: error.message,
    };
  }

  return {
    data,
    error: null,
  };
};

export const getOneData = async (tableName, columnName, id) => {
  const { data, error } = await supabase
    .from(tableName)
    .select()
    .eq(columnName, id)
    .single();

  if (error) {
    console.log("error=>", error);

    return {
      data: null,
      error: error.message,
    };
  }

  if (data.length >= 1) {
    const firstRoom = data[0];
    return {
      data: firstRoom,
      error: null,
    };
  } else {
    return {
      data: data,
      error: null,
    };
  }
};

export const insertData = async (tableName, newData) => {
  const { data, error } = await supabase
    .from(tableName)
    .insert(newData)
    .select();

  if (error) {
    console.log("error=>", error);

    return {
      data: null,
      error: error.message,
    };
  }

  return {
    data,
    error: null,
  };
};

export const deleteData = async (tableName, columnName, id) => {
  const { data, error } = await supabase
    .from(tableName)
    .delete()
    .eq(columnName, id)
    .select();

  if (error) {
    console.log("error=>", error);

    return {
      data: null,
      error: error.message,
    };
  }

  return {
    data,
    error: null,
  };
};

export const updateData = async (
  tableName,
  updateColName,
  updateColValue,
  filterColName,
  filterColValue
) => {
  const { data, error } = await supabase
    .from(tableName)
    .update({ [updateColName]: updateColValue })
    .eq(filterColName, filterColValue)
    .select();

  if (error) {
    console.log("error=>", error);

    return {
      data: null,
      error: error.message,
    };
  }

  // console.log(
  //   `Updating in table: ${tableName} where ${filterColName} = ${id}`,
  //   updatedData
  // );

  return {
    data,
    error: null,
  };
};

export const updateAllData = async (tableName, columnName, id, updatedData) => {
  const { data, error } = await supabase
    .from(tableName)
    .update(updatedData)
    .eq(columnName, id)
    .select();

  if (error) {
    console.log("error=>", error);

    return {
      data: null,
      error: error.message,
    };
  }

  return {
    data,
    error: null,
  };
};

export const getDataByDateAndCar = async (
  startDate = "",
  endDate = "",
  extraQuery = "",
  carNo = ""
) => {
  let query = supabase
    .from("trip")
    .select(`* ${extraQuery !== "" ? "," + extraQuery : ""}`);

  if (startDate !== "" && endDate !== "") {
    query = query.gte("start_date", startDate).lte("end_date", endDate);
  }

  if (carNo !== "") {
    query = query.eq("car_no", carNo);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error:", error);
    return { data: null, error };
  }

  return { data, error: null };
};

// interface ColLocation{
//   colName,
//   colValue|number
// }

// export const updateAllData = async (
//   tableName,
//   tableCol: ColLocation,
//   updatedData
// ) => {
//   const { data, error } = await supabase
//     .from(tableName)
//     .update(updatedData)
//     .eq(tableCol.colName, tableCol.colValue)
//     .select();

//   if (error) {
//     console.log("error=>", error);

//     return {
//       data: null,
//       error: error.message,
//     };
//   }

//   // console.log(
//   //   `Updating in table: ${tableName} where ${columnName} = ${id}`,
//   //   updatedData
//   // );

//   return {
//     data,
//     error: null,
//   };
// };
